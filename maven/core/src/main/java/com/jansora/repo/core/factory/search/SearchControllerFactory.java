package com.jansora.repo.core.factory.search;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.SearchResponse;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-07-16 13:21:33
 */
public interface SearchControllerFactory<REQUEST extends SearchableRequest, RESPONSE extends SearchResponse> {

    SearchProviderFactory<REQUEST, RESPONSE> searchFactory();


    /**
     * 高级搜索
     */
    @GetMapping("advancedSearch")
    default PageResponse<HighlightResponse> search(REQUEST request) throws BaseException {
        return searchFactory().search(request);
    }


    /**
     * 搜索正文
     *
     */
    @GetMapping("search")
    default ResultDto<PageResponse<RESPONSE>> classify(REQUEST request) throws BaseException {
        return ResultDto.SUCCESS(searchFactory().dbSearch(request));
    }

    /**
     * 搜索 classify
     */
    @GetMapping("classifyCounts")
    default ResultDto<List<KVDto<Long>>> fetchClassifyCounts() throws BaseException  {
        return ResultDto.SUCCESS(searchFactory().fetchClassifyCounts());
    }

    /**
     * 搜索 tag
     *
     * @param classify
     */
    @GetMapping("tags")
    default ResultDto<List<KVDto<Long>>> fetchTags(String classify) throws BaseException  {
        return ResultDto.SUCCESS(searchFactory().fetchTags(classify));
    }

    /**
     * 搜索 logo
     */
    @GetMapping("logos")
    default ResultDto<List<KVDto<String>>> fetchLogos() throws BaseException  {
        return ResultDto.SUCCESS(searchFactory().fetchLogos());
    }
}
