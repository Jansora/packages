package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.ety.BaseEty;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.req.BaseReq;
import com.jansora.repo.core.payload.vo.BaseVo;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-29 12:52:57
 */
public interface CrudConverter<ENTITY extends BaseEty, REQUEST extends BaseReq, RESPONSE extends BaseVo, MODEL extends BaseDo> {

    /**
     * 入参转化为实体
     */
    @Mappings({

    })
    ENTITY toEntity(REQUEST request);

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

    /**
     * 实体 转化为 Response
     */
    @Mappings({

    })
    RESPONSE toResponse(ENTITY entity);


}
