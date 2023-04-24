package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.entity.EntityRequest;
import com.jansora.repo.core.factory.entity.EntityResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:25:33
 */
public interface CrudDomainFactory<REQUEST extends EntityRequest, RESPONSE extends EntityResponse> {

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    RESPONSE findById(Long id) throws BaseAppException;

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    RESPONSE save(REQUEST req) throws BaseAppException;

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    RESPONSE deleteById(Long id) throws BaseAppException;


}
