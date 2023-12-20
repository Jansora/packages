package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.repository.AdvancedSearchRepositoryFactory;
import com.jansora.repo.core.factory.repository.ClassifiableRepositoryFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.ClassifiableRequest;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.SearchResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 17:14:38
 */
public interface ClassifiableDomainFactory {

    ClassifiableRepositoryFactory classifiableRepositoryFactory();

    default AdvancedSearchRepositoryFactory advancedSearchRepositoryFactory() {
        return null;
    }

    /**
     * 搜索正文
     */
    default PageResponse<SearchResponse> search(ClassifiableRequest request) throws BaseException {
        List<Long> ids = new ArrayList<>();
        if (advancedSearchRepositoryFactory() != null) {
            SearchableRequest _request = new SearchableRequest();
            _request.setKeywords(request.getName());
            _request.setPageNum(request.getPageNum() - 1);
            _request.setPageSize(request.getPageSize());
            PageResponse<HighlightResponse> response = advancedSearchRepositoryFactory().advancedSearch(_request);
            if (response.getTotal() > 0) {
                ids = response.getData().stream().map(HighlightResponse::getId).collect(Collectors.toList());
            }
        }


        return classifiableRepositoryFactory().compatibleSearch(request, ids);
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

