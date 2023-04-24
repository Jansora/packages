package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.request.BaseRequest;
import com.jansora.repo.core.payload.response.BaseResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-29 12:52:57
 */
public interface CrudConverter<ENTITY extends BaseEntity, REQUEST extends BaseRequest, RESPONSE extends BaseResponse, MODEL extends BaseDo>
        extends CrudPersistenceConverter<ENTITY, MODEL>,
        CrudRequestConverter<ENTITY, REQUEST>,
        CrudResponseConverter<ENTITY, RESPONSE>,
        BaseConverter
{


}
