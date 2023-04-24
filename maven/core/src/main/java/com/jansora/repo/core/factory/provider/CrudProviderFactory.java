package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.domain.CrudDomainFactory;
import com.jansora.repo.core.factory.entity.EntityRequest;
import com.jansora.repo.core.factory.entity.EntityResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-26 18:32:08
 */
public interface CrudProviderFactory<REQUEST extends EntityRequest, RESPONSE extends EntityResponse> {


    CrudDomainFactory<REQUEST, RESPONSE> factory();


    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default RESPONSE findById(Long id) throws BaseAppException {
        return factory().findById(id);
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    default RESPONSE save(REQUEST req) throws BaseAppException {
        return factory().save(req);
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default RESPONSE deleteById(Long id) throws BaseAppException {
        return factory().deleteById(id);
    }



}
