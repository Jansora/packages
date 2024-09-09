package com.jansora.repo.mysql.factory.repository;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.auth.ForbiddenException;
import com.jansora.repo.core.exception.dao.DataNotFoundException;
import com.jansora.repo.core.factory.converter.CrudPersistenceConverter;
import com.jansora.repo.core.factory.crud.CrudRepositoryFactory;
import com.jansora.repo.core.factory.repository.CacheableCrudRepository;
import com.jansora.repo.core.payload.Accessor;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.model.ClassifiableDo;
import com.jansora.repo.core.utils.AssertUtils;
import com.jansora.repo.core.utils.JsonUtils;
import io.mybatis.mapper.BaseMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-06 14:27:42
 */
@Slf4j
public abstract class AbstractCrudRepository<ENTITY extends BaseEntity, MODEL extends BaseDo> implements CrudRepositoryFactory<ENTITY, Long> {

    abstract public MODEL model();

    abstract public BaseMapper<MODEL, Long> mapper();

    abstract public CrudPersistenceConverter<ENTITY, MODEL> converter();

    // fix
    // Caused by: com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field "source" (class com.jansora.repo.core.payload.entity.BaseEntity), not marked as ignorable (3 known properties: "id", "updatedAt", "createdAt"])
    public <CACHE_ENTITY> CacheableCrudRepository<CACHE_ENTITY, Long> cache() {
        return null;
    };

    public boolean cacheable() {
        return cache() != null;
    }

    /**
     * 根据主键查找
     *
     * @param id 主键
     * @return 返回值
     */
    @Override
    public ENTITY findById(Long id) throws BaseException {

        ENTITY entity;

        // 查缓存
        if (cacheable()) {
            entity = (ENTITY) cache().findById(id);
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
     *
     * @return 返回值
     */
    @Override
    public List<ENTITY> findAll() throws BaseException {
        // 走缓存
        if (cacheable()) {
            return (List) cache().findAll();
        }

        List<MODEL> records = mapper().selectList(model());
        return converter().modelsToEntities(records);
    }

    /**
     * 可读性
     *
     * @param entity
     */
    @Override
    public boolean readable(BaseEntity entity) {

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
     *
     * @param entity
     */
    @Override
    public boolean editable(BaseEntity entity) {
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
     * 保存实体
     * 有实体主键则更新， 没有则保存
     *
     * @param entity entity
     * @return 实体
     */
    @Override
    @Transactional
    public Long save(ENTITY entity) throws BaseException {

        AssertUtils.isTrue(() -> this.editable(entity),  ForbiddenException::new);

        MODEL record = converter().toModel(entity);

        // 先新建
        if (!entity.exist()) {
            if (record instanceof ClassifiableDo classify && classify.getEnabled() == null) {
                ((ClassifiableDo) record).setEnabled(false);
            }
            mapper().insert(record);
            entity.setId(record.getId());
        }
        // 更新
        else {
            mapper().updateByPrimaryKeySelective(record);
        }

        // 清理缓存
        if (cacheable()) {
            cache().delete(entity);
        }

        return entity.getId();

    }

    /**
     * 删除实体
     *
     * @param id 主键
     * @return 被删除的实体
     */
    @Override
    @Transactional
    public ENTITY deleteById(Long id) throws BaseException {
        ENTITY entity = this.findById(id);
        AssertUtils.isTrue(() -> this.editable(entity), ForbiddenException::new);
        mapper().deleteByPrimaryKey(id);

        if (cacheable()) {
            cache().delete(entity);
        }
        return entity;
    }
}
