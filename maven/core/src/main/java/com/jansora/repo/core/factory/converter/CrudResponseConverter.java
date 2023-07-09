package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.factory.entity.EntityFactory;
import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:32:24
 */
public interface CrudResponseConverter<ENTITY extends EntityFactory, RESPONSE extends EntityResponseFactory> extends BaseConverter {

    /**
     * 实体 转化为 Response
     */
    @Mappings({
            @Mapping(target = "createdAt", expression = "java(com.jansora.repo.core.utils.DateUtils.format(entity.getCreatedAt()))"),
            @Mapping(target = "updatedAt", expression = "java(com.jansora.repo.core.utils.DateUtils.format(entity.getUpdatedAt()))"),
    })
    RESPONSE toResponse(ENTITY entity);

}
