package com.jansora.repo.core.factory.feign;

import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:21:39
 */
public interface AdvancedSearchFeignFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory>
        extends ClassifiableFeignFactory<REQUEST, RESPONSE> {


    /**
     * 高级搜索
     */
    @GetMapping("advancedSearch")
    PageResponse<HighlightResponse> advancedSearch(@SpringQueryMap SearchableRequest request);


}
