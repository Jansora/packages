package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.system.NotImplementException;
import com.jansora.repo.core.factory.domain.ClassifiableDomainFactory;
import com.jansora.repo.core.factory.feign.ClassifiableFeignFactory;
import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.ClassifiableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.SearchResponse;
import org.springframework.cloud.openfeign.SpringQueryMap;
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
public interface ClassifiableProviderFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory>
        extends ClassifiableFeignFactory<REQUEST, RESPONSE> {

    ClassifiableDomainFactory classifiableDomainFactory();

    /**
     * 搜索正文
     */
    default PageResponse<SearchResponse> search(@SpringQueryMap ClassifiableRequest request) throws BaseException {
        return classifiableDomainFactory().search(request);
    }

    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts() throws BaseException  {
        return classifiableDomainFactory().fetchClassifyCounts();
    }


    /**
     * 搜索 tag
     *
     * @param classify
     */
    default List<KVDto<Long>> fetchTags(@RequestParam(required = false) String classify) throws BaseException  {
        return classifiableDomainFactory().fetchTags(classify);
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos() throws BaseException  {
        return classifiableDomainFactory().fetchLogos();
    }


    default String moduleName() throws NotImplementException {
        throw new NotImplementException();
    }

}
