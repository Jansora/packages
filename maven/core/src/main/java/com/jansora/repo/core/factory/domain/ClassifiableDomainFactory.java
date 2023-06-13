package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.exception.BaseException;
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
    default PageResponse<SearchResponse> search(ClassifiableRequest request) throws BaseException {
        return classifiableRepositoryFactory().search(request);
    }


    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts() throws BaseException   {
        return classifiableRepositoryFactory().fetchClassifyCounts();
    }

    /**
     * 搜索 tag
     */
    default List<KVDto<Long>> fetchTags(String classify) throws BaseException  {
        return classifiableRepositoryFactory().fetchTags(classify);
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos() throws BaseException  {
        return classifiableRepositoryFactory().fetchLogos();
    }

}

