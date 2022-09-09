package com.jansora.repo.dubbo.factory.provider;

import com.jansora.app.repo.core.payload.dto.KVDto;
import com.jansora.app.repo.core.payload.req.SearchReq;
import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.provider.SearchProviderFactory;
import com.jansora.repo.core.factory.service.SearchServiceFactory;
import com.jansora.repo.core.payload.vo.PageVo;
import com.jansora.repo.core.payload.vo.SearchVo;
import com.jansora.repo.dubbo.context.DubboAuthContext;

import java.util.List;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/10 AM10:55 <br>
 * @since 1.0 <br>
 */
public abstract class AbstractSearchProvider implements SearchProviderFactory {

    public abstract SearchServiceFactory searchService();

    /**
     * 搜索正文
     *
     * @param req
   
     */
    @Override
    public PageVo<SearchVo> search(SearchReq req) throws BaseAppException {
        return searchService().search(req, DubboAuthContext.auth());
    }

    /**
     * 搜索 classify
     *
   
     */
    @Override
    public List<KVDto<Long>> fetchClassifyCounts() throws BaseAppException {
        return searchService().fetchClassifyCounts(DubboAuthContext.auth());
    }

    /**
     * 搜索 tag
     *
     * @param classify
   
     */
    @Override
    public List<KVDto<Long>> fetchTags(String classify) throws BaseAppException {
        return searchService().fetchTags(classify, DubboAuthContext.auth());
    }

    /**
     * 搜索 logo
     *
   
     */
    @Override
    public List<KVDto<String>> fetchLogos() throws BaseAppException {
        return searchService().fetchLogos(DubboAuthContext.auth());
    }
}
