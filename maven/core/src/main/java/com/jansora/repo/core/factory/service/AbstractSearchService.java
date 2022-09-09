package com.jansora.repo.core.factory.service;

import com.jansora.app.repo.core.payload.dto.KVDto;
import com.jansora.app.repo.core.payload.req.SearchReq;
import com.jansora.app.repo.core.payload.valobj.AuthValObj;
import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.repository.SearchRepositoryFactory;
import com.jansora.repo.core.payload.vo.PageVo;
import com.jansora.repo.core.payload.vo.SearchVo;

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
public abstract class AbstractSearchService implements SearchServiceFactory {

    public abstract SearchRepositoryFactory searchRepository();

    /**
     * 搜索正文
     *
     * @param req
     * @param auth
     */
    @Override
    public PageVo<SearchVo> search(SearchReq req, AuthValObj auth) throws BaseAppException {
        return searchRepository().search(req, auth);
    }

    /**
     * 搜索 classify
     *
     * @param auth
     */
    @Override
    public List<KVDto<Long>> fetchClassifyCounts(AuthValObj auth) throws BaseAppException {
        return searchRepository().fetchClassifyCounts(auth);
    }

    /**
     * 搜索 tag
     *
     * @param classify
     * @param auth
     */
    @Override
    public List<KVDto<Long>> fetchTags(String classify, AuthValObj auth) throws BaseAppException {
        return searchRepository().fetchTags(classify, auth);
    }

    /**
     * 搜索 logo
     *
     * @param auth
     */
    @Override
    public List<KVDto<String>> fetchLogos(AuthValObj auth) throws BaseAppException {
        return searchRepository().fetchLogos(auth);
    }
}
