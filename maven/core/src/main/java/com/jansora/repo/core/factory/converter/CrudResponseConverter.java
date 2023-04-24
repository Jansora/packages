package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.response.EntityResponse;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:32:24
 */
public interface CrudResponseConverter<ENTITY extends BaseEntity, RESPONSE extends EntityResponse> extends BaseConverter {

    /**
     * 实体 转化为 Response
     */
    @Mappings({

    })
    RESPONSE toResponse(ENTITY entity);

}
