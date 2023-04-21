package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.converter.CrudConverter;
import com.jansora.repo.core.factory.repository.CrudRepositoryFactory;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.request.BaseRequest;
import com.jansora.repo.core.payload.response.BaseResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-21 23:46:11
 */
public abstract class AbstractProviderFactoryImpl<ENTITY extends BaseEntity, REQUEST extends BaseRequest, RESPONSE extends BaseResponse, MODEL extends BaseDo> implements CrudProviderFactory<REQUEST, RESPONSE> {

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