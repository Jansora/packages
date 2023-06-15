package com.jansora.repo.core.factory.domain;

import com.jansora.repo.core.factory.repository.AdvancedSearchRepositoryFactory;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:54:17
 */
public interface AdvancedSearchDomainFactory {


    AdvancedSearchRepositoryFactory advancedSearchRepositoryFactory();
    /**
     * 高级搜索
     */
    default PageResponse<HighlightResponse> advancedSearch(SearchableRequest request) {
        return advancedSearchRepositoryFactory().advancedSearch(request);
    }


}
