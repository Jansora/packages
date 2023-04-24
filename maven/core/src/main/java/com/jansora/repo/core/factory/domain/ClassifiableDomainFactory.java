package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.factory.repository.ClassifiableRepositoryFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.ClassifiableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.SearchResponse;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 17:14:38
 */
public interface ClassifiableDomainFactory {

    ClassifiableRepositoryFactory classifiableRepositoryFactory();

    /**
     * 搜索正文
     */
    default PageResponse<SearchResponse> search(ClassifiableRequest request)  {
        return classifiableRepositoryFactory().search(request);
    }


    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts()  {
        return classifiableRepositoryFactory().fetchClassifyCounts();
    }

    /**
     * 搜索 tag
     */
    default List<KVDto<Long>> fetchTags(String classify)  {
        return classifiableRepositoryFactory().fetchTags(classify);
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos()  {
        return classifiableRepositoryFactory().fetchLogos();
    }
}

