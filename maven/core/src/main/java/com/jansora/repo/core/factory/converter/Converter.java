package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.model.BaseDo;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-28 10:30:54
 */
public interface Converter<REQUEST, RESPONSE, MODEL extends BaseDo> {


    /**
     * 入参转化为模型
     */
    @Mappings({
//            @Mapping(target = "createdAt", expression = "java()")
    })
    MODEL toDo(REQUEST request);

    /**
     * 模型转化为出参
     */
    RESPONSE toVo(MODEL request);


    List<MODEL> toDos(List<REQUEST> requests);

    List<RESPONSE> toVos(List<MODEL> requests);
}
