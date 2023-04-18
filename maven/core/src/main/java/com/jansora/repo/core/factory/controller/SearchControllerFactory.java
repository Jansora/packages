package com.jansora.repo.core.factory.controller;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.exception.web.InvalidArgumentException;
import com.jansora.repo.core.factory.provider.SearchableProviderFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.PropertyResponse;
import com.jansora.repo.core.payload.vo.SearchVo;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * <Description>  <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/10 PM02:16 <br>
 * @since 1.0 <br>
 */
public interface SearchControllerFactory {
    
    abstract SearchableProviderFactory searchFactory();

    /**
     * 搜索正文
     *
     * @param req
     */
    @GetMapping("search")
    default ResultDto<PageResponse<SearchVo>> search(SearchableRequest request) throws BaseAppException {
        return ResultDto.SUCCESS(searchFactory().search(request));
    }

    /**
     * 搜索 classify
     */
    @GetMapping("classifyCounts")
    default ResultDto<List<KVDto<Long>>> fetchClassifyCounts() throws BaseAppException {
        return ResultDto.SUCCESS(searchFactory().fetchClassifyCounts());
    }

    /**
     * 查询 分类列表
     * @return Optional<EasyCodeDto>
     */
    @GetMapping("classifies")
    default ResultDto<List<PropertyResponse>> fetchClassifies() throws InvalidArgumentException {
        return ResultDto.SUCCESS(searchFactory().fetchClassifies());
    }

    /**
     * 搜索 tag
     *
     * @param classify
     */
    @GetMapping("tags")
    default ResultDto<List<KVDto<Long>>> fetchTags(String classify) throws BaseAppException {
        return ResultDto.SUCCESS(searchFactory().fetchTags(classify));
    }

    /**
     * 搜索 logo
     */
    @GetMapping("logos")
    default ResultDto<List<KVDto<String>>> fetchLogos() throws BaseAppException {
        return ResultDto.SUCCESS(searchFactory().fetchLogos());
    }

}
