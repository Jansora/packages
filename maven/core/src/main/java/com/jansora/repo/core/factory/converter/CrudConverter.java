package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.factory.entity.EntityRequest;
import com.jansora.repo.core.factory.entity.EntityResponse;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;


/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-29 12:52:57
 */
public interface CrudConverter<ENTITY extends BaseEntity, REQUEST extends EntityRequest, RESPONSE extends EntityResponse, MODEL extends BaseDo>
        extends CrudPersistenceConverter<ENTITY, MODEL>,
        CrudRequestConverter<ENTITY, REQUEST>,
        CrudResponseConverter<ENTITY, RESPONSE>,
        BaseConverter
{


}
