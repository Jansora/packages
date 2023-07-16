package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.entity.EntityResponseFactory;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:25:33
 */
public interface CrudDomainFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory> {

//    /**
//     * 查找所有
//     */
//    List<RESPONSE> findAll() throws BaseException;

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    RESPONSE findById(Long id) throws BaseException;

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    RESPONSE save(REQUEST req) throws BaseException ;

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    RESPONSE deleteById(Long id) throws BaseException ;


}
