package com.jansora.repo.core.factory.controller;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.web.InvalidArgumentException;
import com.jansora.repo.core.factory.provider.ClassifiableProviderFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.request.ClassifiableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.PropertyResponse;
import com.jansora.repo.core.payload.response.SearchResponse;
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
public interface ClassifiableControllerFactory {
    
    abstract ClassifiableProviderFactory searchFactory();

    /**
     * 搜索正文
     *
     * @param req
     */
    @GetMapping("search")
    default ResultDto<PageResponse<SearchResponse>> search(ClassifiableRequest request) throws BaseException {
        return ResultDto.SUCCESS(searchFactory().search(request));
    }

    /**
     * 搜索 classify
     */
    @GetMapping("classifyCounts")
    default ResultDto<List<KVDto<Long>>> fetchClassifyCounts() throws BaseException  {
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
