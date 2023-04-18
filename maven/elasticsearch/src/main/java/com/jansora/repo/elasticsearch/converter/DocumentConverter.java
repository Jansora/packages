package com.jansora.repo.elasticsearch.converter;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.elasticsearch.index.BaseDocument;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-28 10:30:54
 */
public interface DocumentConverter<DOCUMENT extends BaseDocument, ENTITY extends BaseEntity> {

    /**
     * 入参转化为模型
     */
    @Mappings({

    })
    DOCUMENT toDocument(ENTITY entity);

    /**
     * 模型转化为出参
     */
    ENTITY toEntity(DOCUMENT document);

    /**
     * to document
     */
    List<DOCUMENT> toDocuments(List<? extends BaseEntity> entities);

    /**
     * to entities
     */
    List<ENTITY> toEntities(List<DOCUMENT> documents);
}
