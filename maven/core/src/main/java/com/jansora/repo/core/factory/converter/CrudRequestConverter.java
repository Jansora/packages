package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.request.EntityRequest;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:32:06
 */
public interface CrudRequestConverter<ENTITY extends BaseEntity, REQUEST extends EntityRequest> extends BaseConverter {
    /**
     * 入参转化为实体
     */
    @Mappings({

    })
    ENTITY toEntity(REQUEST request);


}
