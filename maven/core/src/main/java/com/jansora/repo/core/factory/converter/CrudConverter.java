package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.factory.entity.EntityFactory;
import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.model.EntityDo;


/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-29 12:52:57
 */
public interface CrudConverter<ENTITY extends EntityFactory, REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory, MODEL extends EntityDo>
        extends CrudPersistenceConverter<ENTITY, MODEL>,
        CrudRequestConverter<ENTITY, REQUEST>,
        CrudResponseConverter<ENTITY, RESPONSE>,
        BaseConverter
{


}
