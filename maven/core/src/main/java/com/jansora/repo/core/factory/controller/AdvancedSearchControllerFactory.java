package com.jansora.repo.core.factory.controller;

import com.jansora.repo.core.factory.feign.AdvancedSearchFeignFactory;
import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-07-16 13:21:33
 */
public interface AdvancedSearchControllerFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory> {

    AdvancedSearchFeignFactory<REQUEST, RESPONSE> advancedSearchFactory();



    /**
     * 高级搜索
     */
    @GetMapping("advancedSearch")
    default PageResponse<HighlightResponse> advancedSearch(SearchableRequest request) {
        return advancedSearchFactory().advancedSearch(request);
    }
}
