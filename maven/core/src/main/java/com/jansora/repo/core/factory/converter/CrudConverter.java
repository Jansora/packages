package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.factory.repository.entity.EntityFactory;
import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.model.BaseDo;


/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-29 12:52:57
 */
public interface CrudConverter<ENTITY extends EntityFactory, REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory, MODEL extends BaseDo>
        extends CrudPersistenceConverter<ENTITY, MODEL>,
        CrudRequestConverter<ENTITY, REQUEST>,
        CrudResponseConverter<ENTITY, RESPONSE>,
        BaseConverter
{


}
