package com.jansora.repo.elasticsearch.factory;

import com.jansora.repo.core.payload.ety.BaseEty;
import com.jansora.repo.elasticsearch.converter.DocumentConverter;
import com.jansora.repo.elasticsearch.index.BaseDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-21 22:10:49
 */
@NoRepositoryBean
public interface ElasticsearchCrudFactory<T, ID> extends ElasticsearchRepository<T, ID> {

    DocumentConverter<? extends BaseDocument, ? extends BaseEty> documentConverter();

}
