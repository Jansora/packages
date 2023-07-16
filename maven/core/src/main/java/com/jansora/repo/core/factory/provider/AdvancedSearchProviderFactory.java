package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.factory.domain.AdvancedSearchDomainFactory;
import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import com.jansora.repo.core.factory.feign.AdvancedSearchFeignFactory;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:54:17
 */
public interface AdvancedSearchProviderFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory>
        extends AdvancedSearchFeignFactory<REQUEST, RESPONSE> {

    /**
     * 高级搜索 repo
     */
    AdvancedSearchDomainFactory advancedSearchDomainFactory();

    /**
     * 高级搜索
     */
    default PageResponse<HighlightResponse> advancedSearch(SearchableRequest request) {
        return advancedSearchDomainFactory().advancedSearch(request);
    }


}
