package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.system.NotImplementException;
import com.jansora.repo.core.factory.domain.ClassifiableDomainFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.request.ClassifiableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.PropertyResponse;
import com.jansora.repo.core.payload.response.SearchResponse;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/10 AM10:58 <br>
 * @since 1.0 <br>
 */
public interface ClassifiableProviderFactory extends FeignClientProviderFactory {

    ClassifiableDomainFactory classifiableDomainFactory();

    /**
     * 搜索正文
     *
     * @param req
     */
    @GetMapping("search")
    default ResultDto<PageResponse<SearchResponse>> search(ClassifiableRequest request) throws BaseException {
        return ResultDto.SUCCESS(classifiableDomainFactory().search(request));
    }

    /**
     * 搜索 classify
     */
    @GetMapping("classifyCounts")
    default ResultDto<List<KVDto<Long>>> fetchClassifyCounts() throws BaseException  {
        return ResultDto.SUCCESS(classifiableDomainFactory().fetchClassifyCounts());
    }

    /**
     * 查询 分类列表
     * @return Optional<EasyCodeDto>
     */
    @GetMapping("classifies")
    default ResultDto<List<PropertyResponse>> fetchClassifies() throws BaseException {
        throw new NotImplementException();
    }

    /**
     * 搜索 tag
     *
     * @param classify
     */
    @GetMapping("tags")
    default ResultDto<List<KVDto<Long>>> fetchTags(String classify) throws BaseException  {
        return ResultDto.SUCCESS(classifiableDomainFactory().fetchTags(classify));
    }

    /**
     * 搜索 logo
     */
    @GetMapping("logos")
    default ResultDto<List<KVDto<String>>> fetchLogos() throws BaseException  {
        return ResultDto.SUCCESS(classifiableDomainFactory().fetchLogos());
    }


    String moduleName();

}
