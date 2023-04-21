package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.payload.request.BaseRequest;
import com.jansora.repo.core.payload.response.BaseResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-26 18:32:08
 */
public interface CrudProviderFactory<REQUEST extends BaseRequest, RESPONSE extends BaseResponse> {


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
