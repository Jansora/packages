package com.jansora.repo.elasticsearch.converter;

import com.jansora.repo.core.payload.vo.SearchVo;
import com.jansora.repo.elasticsearch.index.BaseDocument;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-28 10:30:54
 */
public interface DocumentConverter<DOCUMENT extends BaseDocument, VO extends SearchVo> {


    /**
     * 入参转化为模型
     */
    @Mappings({

    })
    DOCUMENT toDocument(VO vo);

    /**
     * 模型转化为出参
     */
    VO toVo(DOCUMENT document);


    List<DOCUMENT> toDocument(List<VO> requests);

    List<VO> toVos(List<DOCUMENT> requests);
}
