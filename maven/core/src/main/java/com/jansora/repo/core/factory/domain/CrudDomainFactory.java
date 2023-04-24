package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.request.BaseRequest;
import com.jansora.repo.core.payload.response.BaseResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:25:33
 */
public interface CrudDomainFactory<ENTITY extends BaseEntity, REQUEST extends BaseRequest, RESPONSE extends BaseResponse> {

}
