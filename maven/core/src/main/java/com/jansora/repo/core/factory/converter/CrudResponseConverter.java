package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.entity.BaseEntityFactory;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:32:24
 */
public interface CrudResponseConverter<ENTITY extends BaseEntityFactory, RESPONSE extends EntityResponseFactory> extends BaseConverter {

    /**
     * 实体 转化为 Response
     */
    @Mappings({

    })
    RESPONSE toResponse(ENTITY entity);

}
