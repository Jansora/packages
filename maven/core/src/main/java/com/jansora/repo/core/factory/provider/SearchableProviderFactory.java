package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.context.AuthContext;
import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.exception.web.InvalidArgumentException;
import com.jansora.repo.core.factory.repository.SearchableRepositoryFactory;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.PropertyResponse;
import com.jansora.repo.core.payload.vo.SearchVo;

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
public interface SearchableProviderFactory {

    public abstract SearchableRepositoryFactory searchFactory();


    /**
     * 搜索正文
     */
    default PageResponse<SearchVo> search(SearchableRequest request) throws BaseAppException {
        return searchFactory().search(request, AuthContext.auth());
    }

    /**
     * 查询 分类列表
     * @return Optional<EasyCodeDto>
     */
    List<PropertyResponse> fetchClassifies() throws InvalidArgumentException;

    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts() throws BaseAppException {
        return searchFactory().fetchClassifyCounts(AuthContext.auth());
    }

    /**
     * 搜索 tag
     */
    default List<KVDto<Long>> fetchTags(String classify) throws BaseAppException {
        return searchFactory().fetchTags(classify, AuthContext.auth());
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos() throws BaseAppException {
        return searchFactory().fetchLogos(AuthContext.auth());
    }

}
