package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.converter.CrudConverter;
import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import com.jansora.repo.core.factory.repository.CrudRepositoryFactory;
import com.jansora.repo.core.payload.entity.BaseEntityFactory;
import com.jansora.repo.core.payload.model.BaseDo;


/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 13:58:54
 */
public abstract class AbstractCrudDomain<ENTITY extends BaseEntityFactory, REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory, MODEL extends BaseDo>
        implements CrudDomainFactory<REQUEST, RESPONSE>
{

    public abstract CrudRepositoryFactory<ENTITY, Long> factory();

    public abstract CrudConverter<ENTITY, REQUEST, RESPONSE, MODEL> converter();

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    public RESPONSE findById(Long id) throws BaseAppException {
        return converter().toResponse(factory().findById(id));
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    public RESPONSE save(REQUEST req) throws BaseAppException {
        return converter().toResponse(factory().save(converter().toEntity(req)));
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    public RESPONSE deleteById(Long id) throws BaseAppException {
        return converter().toResponse(factory().deleteById(id));
    }
}
