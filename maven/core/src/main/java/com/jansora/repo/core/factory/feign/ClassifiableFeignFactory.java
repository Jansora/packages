package com.jansora.repo.core.factory.feign;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.ClassifiableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.PropertyResponse;
import com.jansora.repo.core.payload.response.SearchResponse;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
public interface ClassifiableFeignFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory>
        extends CrudFeignFactory<REQUEST, RESPONSE> {

    /**
     * 搜索正文
     */
    @GetMapping("search")
    PageResponse<SearchResponse> search(@SpringQueryMap ClassifiableRequest request) throws BaseException;

    /**
     * 搜索 classify
     */
    @GetMapping("classifyCounts")
    List<KVDto<Long>> fetchClassifyCounts() throws BaseException ;

    /**
     * 查询 分类列表
     * @return Optional<EasyCodeDto>
     */
    @GetMapping("classifies")
    List<PropertyResponse> fetchClassifies() throws BaseException ;

    /**
     * 搜索 tag
     *
     * @param classify
     */
    @GetMapping("tags")
    List<KVDto<Long>> fetchTags(@RequestParam(required = false) String classify) throws BaseException;

    /**
     * 搜索 logo
     */
    @GetMapping("logos")
    List<KVDto<String>> fetchLogos() throws BaseException;


}
