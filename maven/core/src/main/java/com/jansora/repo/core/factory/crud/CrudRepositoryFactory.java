package com.jansora.repo.core.factory.crud;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.auth.ForbiddenException;
import com.jansora.repo.core.exception.dao.DataNotFoundException;
import com.jansora.repo.core.factory.converter.CrudPersistenceConverter;
import com.jansora.repo.core.factory.repository.CacheableCrudRepository;
import com.jansora.repo.core.payload.Accessor;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.model.ClassifiableDo;
import com.jansora.repo.core.utils.AssertUtils;
import com.jansora.repo.core.utils.JsonUtils;
import io.mybatis.mapper.BaseMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

/**
 * <Description> Description for CrudRepository <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:41 <br>
 * @since 1.0 <br>
 */
public interface CrudRepositoryFactory<ENTITY extends BaseEntity, MODEL extends BaseDo> {

    static final Logger log = LoggerFactory.getLogger(CrudRepositoryFactory.class);

    default public MODEL model() {
        /**
         * 通过反射获取文件类型
         */

        try {
            for (Type type: this.getClass().getGenericInterfaces()) {
                if (type instanceof ParameterizedType parameterizedType
                        && parameterizedType.getRawType() instanceof Class<?> clazz
                        && clazz.getName().equals(CrudRepositoryFactory.class.getName())) {
                    return (MODEL) parameterizedType.getActualTypeArguments()[1].getClass().getDeclaredConstructor().newInstance();
                }
            }
        }
        catch (Exception e) {
            log.error("获取实体类失败", e);
        }


        throw new BaseException("获取实体类失败").toRuntimeException();

    }

    abstract public BaseMapper<MODEL, Long> mapper();

    abstract public CrudPersistenceConverter<ENTITY, MODEL> converter();

    abstract public CacheableCrudRepository<ENTITY> cache();

    default public boolean cacheable() {
        return cache() != null;
    }

    /**
     * 可读性
     */
    default boolean readable(ENTITY entity) throws BaseException {

        if (entity instanceof Accessor enable) {
            boolean readable = enable.accessible();
            if (!readable) {
                log.info("no readable permission.  entity: {}  auth: {}", JsonUtils.toNonPrettyJsonIgnoreError(entity), AuthContext.auth());
            }
            return readable;
        }

        return true;

    }

    /**
     * 可编辑性
     */
    default boolean editable(ENTITY entity) throws BaseException {
        boolean editable;
        if (entity.exist()) {

            if (entity instanceof Accessor enable) {
                editable = AuthContext.auth().getAuthId().equals(enable.getUserId());
                if (!editable) {
                    log.info("no editable permission.  entity: {}  auth: {}", entity, AuthContext.auth());
                }
                return editable;
            }

        }
        editable = AuthContext.auth().getAuthId() != null;
        if (!editable) {
            log.info("no editable permission.  entity: {}  auth: {}", entity, AuthContext.auth());
        }
        return editable;
    }


    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default ENTITY findById(Long id) throws BaseException {

        ENTITY entity;

        // 查缓存
        if (cacheable()) {
            entity = cache().findById(id);
        }
        else {
            entity = converter().toEntity(mapper().selectByPrimaryKey(id).orElseThrow(DataNotFoundException::new));
        }

        if (readable(entity)) {
            return entity;
        }
        throw new ForbiddenException("没有访问权限");
    }

    /**
     * 查询所有数据
     * @return 返回值
     */
    default List<ENTITY> findAll() throws BaseException {
        // 走缓存
        if (cacheable()) {
            return cache().findAll();
        }

        List<MODEL> records = mapper().selectList(model());
        return converter().modelsToEntities(records);
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param entity entity
     * @return 实体
     */
    default Long save(ENTITY entity) throws BaseException {
        AssertUtils.isTrue(() -> this.editable(entity),  ForbiddenException::new);

        MODEL record = converter().toModel(entity);

        // 先新建
        if (!entity.exist()) {
            log.info("insert.  entity: {} ", entity);

            if (record instanceof ClassifiableDo classify && classify.getEnabled() == null) {
                ((ClassifiableDo) record).setEnabled(false);
            }
            mapper().insert(record);
            entity.setId(record.getId());
        }
        // 更新
        else {
            log.info("update.  entity: {} ", entity);
            mapper().updateByPrimaryKeySelective(record);
        }

        // 清理缓存
        if (cacheable()) {
            log.info("clean cache.  entity: {} ", entity);
            cache().delete(entity);
        }

        return entity.getId();
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default ENTITY deleteById(Long id) throws BaseException  {
        ENTITY entity = this.findById(id);
        AssertUtils.isTrue(() -> this.editable(entity), ForbiddenException::new);
        mapper().deleteByPrimaryKey(id);

        if (cacheable()) {
            log.info("clean cache.  entity: {} ", entity);
            cache().delete(entity);
        }
        return entity;
    }

}

