package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.converter.CrudConverter;
import com.jansora.repo.core.factory.repository.CrudRepositoryFactory;
import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:25:33
 */
public interface CrudDomainFactory<ENTITY extends BaseEntity, REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory, MODEL extends BaseDo> {

    public abstract CrudRepositoryFactory<ENTITY, Long> crudRepositoryFactory();

    public abstract CrudConverter<ENTITY, REQUEST, RESPONSE, MODEL> crudConverter();

    /**
     * 查找所有
     */
    default List<RESPONSE> findAll() throws BaseException {
        return crudConverter().toResponses(crudRepositoryFactory().findAll());
    }

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default RESPONSE findById(Long id) throws BaseException {
        return crudConverter().toResponse(crudRepositoryFactory().findById(id));
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    default RESPONSE save(REQUEST req) throws BaseException  {
        return this.findById(crudRepositoryFactory().save(crudConverter().toEntity(req)));

    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default RESPONSE deleteById(Long id) throws BaseException {
        return crudConverter().toResponse(crudRepositoryFactory().deleteById(id));
    }

}
