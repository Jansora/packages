package com.jansora.repo.elasticsearch.factory;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.elasticsearch.converter.DocumentConverter;
import com.jansora.repo.elasticsearch.index.ClassifiableDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-21 22:10:49
 */
@NoRepositoryBean
public interface ElasticsearchSyncFactory<T extends ClassifiableDocument, ID, ENTITY extends BaseEntity> {

    DocumentConverter<T, ENTITY> documentConverter();

    ElasticsearchRepository<T, ID> repository();

    /**
     * 刷新数据到 ES
     */
    default void flush() {
        repository().saveAll(documentConverter().toDocuments(this.fetchEntities()));
    }

    /**
     * 获取待转化为文档实体的所有实体
     * @return
     */
    List<ENTITY> fetchEntities();


}
