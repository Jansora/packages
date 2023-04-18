package com.jansora.repo.elasticsearch.factory;

import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.elasticsearch.converter.DocumentConverter;
import com.jansora.repo.elasticsearch.index.BaseDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-21 22:10:49
 */
@NoRepositoryBean
public interface ElasticsearchCrudFactory<T extends BaseDocument, ID, ENTITY extends BaseEntity> extends ElasticsearchRepository<T, ID> {

    DocumentConverter<T, ENTITY> documentConverter();


    /**
     * 刷新数据到 ES
     */
    default void flush() {
        this.saveAll(documentConverter().toDocuments(this.fetchEntities()));
    }

    /**
     * 获取待转化为文档实体的所有实体
     * @return
     */
    List<ENTITY> fetchEntities();


}
