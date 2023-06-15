package com.jansora.repo.core.factory.feign;

import com.jansora.repo.core.factory.domain.AdvancedSearchDomainFactory;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:21:39
 */
public interface AdvancedSearchFeignFactory {

    /**
     * 高级搜索 repo
     */
    AdvancedSearchDomainFactory advancedSearchFactory();

    /**
     * 高级搜索
     */
    @GetMapping("advancedSearch")
    default PageResponse<HighlightResponse> advancedSearch(SearchableRequest request) {
        return advancedSearchFactory().advancedSearch(request);
    }


}
