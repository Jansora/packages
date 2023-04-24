package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:34:51
 */
public interface CrudPersistenceConverter<ENTITY extends BaseEntity, MODEL extends BaseDo> extends BaseConverter {

    /**
     * 实体转化为物理
     */
    @Mappings({
            @Mapping(target = "createdAt", expression = "java(entity.getId() != null ? null : new java.util.Date())"),
            @Mapping(target = "updatedAt", expression = "java(new java.util.Date())"),
    })
    MODEL toModel(ENTITY entity);


    /**
     * model 转化为实体
     */
    @Mappings({

    })
    ENTITY toEntity(MODEL model);

}
