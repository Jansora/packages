package com.jansora.app.repo.core.provider;

import com.jansora.app.repo.core.exception.BaseAppException;
import com.jansora.app.repo.core.payload.dto.KVDto;
import com.jansora.app.repo.core.payload.req.SearchReq;
import com.jansora.app.repo.core.payload.valobj.AuthValObj;
import com.jansora.app.repo.core.payload.vo.PageVo;
import com.jansora.app.repo.core.payload.vo.SearchVo;
import com.jansora.app.repo.core.service.SearchServiceFactory;

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
     * @param auth
     */
    @Override
    public PageVo<SearchVo> search(SearchReq req, AuthValObj auth) throws BaseAppException {
        return searchService().search(req, auth);
    }

    /**
     * 搜索 classify
     *
     * @param auth
     */
    @Override
    public List<KVDto<Long>> fetchClassifyCounts(AuthValObj auth) throws BaseAppException {
        return searchService().fetchClassifyCounts(auth);
    }

    /**
     * 搜索 tag
     *
     * @param classify
     * @param auth
     */
    @Override
    public List<KVDto<Long>> fetchTags(String classify, AuthValObj auth) throws BaseAppException {
        return searchService().fetchTags(classify, auth);
    }

    /**
     * 搜索 logo
     *
     * @param auth
     */
    @Override
    public List<KVDto<String>> fetchLogos(AuthValObj auth) throws BaseAppException {
        return searchService().fetchLogos(auth);
    }
}
