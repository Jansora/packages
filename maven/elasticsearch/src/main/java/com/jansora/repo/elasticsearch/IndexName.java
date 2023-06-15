package com.jansora.repo.elasticsearch;

import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.util.Assert;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-05-29 09:27:48
 */
public interface IndexName {
    default String indexName() {
        Document document = this.getClass().getAnnotation(Document.class);
        Assert.notNull(document, "");
        return document.indexName();
    };

}
