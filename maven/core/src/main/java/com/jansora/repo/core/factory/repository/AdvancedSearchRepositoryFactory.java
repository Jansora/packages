package com.jansora.repo.core.factory.repository;

import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:54:17
 */
public interface AdvancedSearchRepositoryFactory {


    /**
     * 高级搜索
     */
    PageResponse<HighlightResponse> advancedSearch(SearchableRequest request);

}
