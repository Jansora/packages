package com.jansora.repo.core.factory.controller;

import com.jansora.app.repo.core.payload.dto.KVDto;
import com.jansora.app.repo.core.payload.req.SearchReq;
import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.exception.system.NotImplementException;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.vo.PageVo;
import com.jansora.repo.core.payload.vo.SearchVo;

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

    /**
     * 搜索正文
     */
    default ResultDto<PageVo<SearchVo>> search(SearchReq req) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 搜索 classify
     */
    default ResultDto<List<KVDto<Long>>> fetchClassifyCounts() throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 搜索 tag
     */
    default ResultDto<List<KVDto<Long>>> fetchTags(String classify) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 搜索 logo
     */
    default ResultDto<List<KVDto<String>>> fetchLogos() throws BaseAppException {
        throw new NotImplementException();
    }


}
