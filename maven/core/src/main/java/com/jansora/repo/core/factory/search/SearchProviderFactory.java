package com.jansora.repo.core.factory.search;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.system.NotImplementException;
import com.jansora.repo.core.payload.dto.KVDto;
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
 * @date: 2023-06-15 10:54:17
 */
public interface SearchProviderFactory<REQUEST extends SearchableRequest, RESPONSE extends SearchResponse> {

    SearchRepositoryFactory searchRepository();

    default SearchRepositoryFactory advancedSearchRepositoryFactory() {
        return null;
    }


    /**
     * 高级搜索
     */
    default PageResponse<HighlightResponse> search(REQUEST request) throws BaseException {
        return advancedSearchRepositoryFactory().search(request);
    }


    /**
     * 搜索正文
     */
    default PageResponse<RESPONSE> dbSearch(SearchableRequest request) throws BaseException {
        List<Long> ids = new ArrayList<>();
        if (advancedSearchRepositoryFactory() != null) {
            SearchableRequest _request = new SearchableRequest();
            _request.setKeywords(request.getName());
            _request.setPageNum(request.getPageNum() - 1);
            _request.setPageSize(request.getPageSize());
            PageResponse<HighlightResponse> response = advancedSearchRepositoryFactory().search(_request);
            if (response.getTotal() > 0) {
                ids = response.getData().stream().map(HighlightResponse::getId).collect(Collectors.toList());
            }
        }


        return (PageResponse<RESPONSE>) searchRepository().dbSearch(request, ids);
    }


    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts() {
        return searchRepository().fetchClassifyCounts();
    }

    /**
     * 搜索 tag
     */
    default List<KVDto<Long>> fetchTags(String classify) {
        return searchRepository().fetchTags(classify);
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos() {
        return searchRepository().fetchLogos();
    }


    default String moduleName() throws NotImplementException {
        throw new NotImplementException();
    }


}
