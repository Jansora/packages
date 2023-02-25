package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.exception.system.NotImplementException;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.req.SearchReq;
import com.jansora.repo.core.payload.vo.PageVo;
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
public interface SearchProviderFactory {

    /**
     * 搜索正文
     */
    default PageVo<SearchVo> search(SearchReq req) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts() throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 搜索 tag
     */
    default List<KVDto<Long>> fetchTags(String classify) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos() throws BaseAppException {
        throw new NotImplementException();
    }



}
