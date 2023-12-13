package com.jansora.repo.mysql.factory.repository;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.auth.ForbiddenException;
import com.jansora.repo.core.exception.dao.DataNotFoundException;
import com.jansora.repo.core.factory.converter.CrudPersistenceConverter;
import com.jansora.repo.core.factory.repository.CrudRepositoryFactory;
import com.jansora.repo.core.factory.repository.entity.EntityFactory;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.model.ClassifiableDo;
import com.jansora.repo.core.utils.AssertUtils;
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
public abstract class AbstractCrudRepository<ENTITY extends EntityFactory, MODEL extends BaseDo> implements CrudRepositoryFactory<ENTITY, Long> {

    abstract public MODEL model();

    abstract public BaseMapper<MODEL, Long> mapper();

    abstract public CrudPersistenceConverter<ENTITY, MODEL> converter();


    /**
     * 根据主键查找
     *
     * @param id 主键
     * @return 返回值
     */
    @Override
    public ENTITY findById(Long id) throws BaseException {

        ENTITY entity = converter().toEntity(mapper().selectByPrimaryKey(id).orElseThrow(DataNotFoundException::new));
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
        List<MODEL> records = mapper().selectList(model());
        return converter().modelsToEntities(records);
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
        AssertUtils.isFalse(AuthContext::empty, ForbiddenException::new);

        MODEL record = converter().toModel(entity);

        // 先新建
        if (!entity.exist()) {
            if (record instanceof ClassifiableDo classify && classify.getEnabled() == null) {
                ((ClassifiableDo) record).setEnabled(false);
            }
            mapper().insert(record);
            entity.setId(record.getId());
        }
        else {
            AssertUtils.isTrue(() -> this.editable(converter().toEntity(record)), ForbiddenException::new);
            mapper().updateByPrimaryKeySelective(record);
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
        return entity;
    }
}
