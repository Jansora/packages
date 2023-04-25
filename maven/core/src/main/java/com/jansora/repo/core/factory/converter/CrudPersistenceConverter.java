package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.factory.entity.EntityFactory;
import com.jansora.repo.core.payload.model.EntityDo;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 12:34:51
 */
public interface CrudPersistenceConverter<ENTITY extends EntityFactory, MODEL extends EntityDo> extends BaseConverter {

    /**
     * 实体转化为物理
     */
    @Mappings({
            @Mapping(target = "userId", expression = "java(com.jansora.repo.core.context.AuthContext.auth().getAuthId())", ignore = true),
            @Mapping(target = "createdAt", expression = "java(entity.getId() != null ? null : new java.util.Date())", ignore = true),
            @Mapping(target = "updatedAt", expression = "java(new java.util.Date())", ignore = true),
    })
    MODEL toModel(ENTITY entity);


    /**
     * model 转化为实体
     */
    @Mappings({

    })
    ENTITY toEntity(MODEL model);

}
