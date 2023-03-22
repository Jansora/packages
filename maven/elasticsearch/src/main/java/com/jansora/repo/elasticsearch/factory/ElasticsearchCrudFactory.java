package com.jansora.repo.elasticsearch.factory;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.ArrayList;
import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-21 22:10:49
 */
@NoRepositoryBean
public interface ElasticsearchCrudFactory<T, ID> extends ElasticsearchRepository<T, ID> {


    default List<T> findAllFromDb() {
        return new ArrayList<>();
    }

    /**
     * 刷新数据到 es
     */
    default void flush() {
        this.saveAll(this.findAllFromDb());
    }

}
