package com.jansora.repo.web.factory.provider;

import com.jansora.app.repo.core.payload.dto.KVDto;
import com.jansora.app.repo.core.payload.req.SearchReq;
import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.controller.SearchControllerFactory;
import com.jansora.repo.core.factory.provider.SearchProviderFactory;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.vo.PageVo;
import com.jansora.repo.core.payload.vo.SearchVo;
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
public abstract class AbstractSearchController implements SearchControllerFactory {

    public abstract SearchProviderFactory searchProvider();

    /**
     * 搜索正文
     *
     * @param req
     */
    @Override
    @GetMapping("search")
    public ResultDto<PageVo<SearchVo>> search(SearchReq req) throws BaseAppException {
        return ResultDto.SUCCESS(searchProvider().search(req));
    }

    /**
     * 搜索 classify
     */
    @Override
    @GetMapping("classifyCounts")
    public ResultDto<List<KVDto<Long>>> fetchClassifyCounts() throws BaseAppException {
        return ResultDto.SUCCESS(searchProvider().fetchClassifyCounts());
    }

    /**
     * 搜索 tag
     *
     * @param classify
     */
    @Override
    @GetMapping("tags")
    public ResultDto<List<KVDto<Long>>> fetchTags(String classify) throws BaseAppException {
        return ResultDto.SUCCESS(searchProvider().fetchTags(classify));
    }

    /**
     * 搜索 logo
     */
    @Override
    @GetMapping("logos")
    public ResultDto<List<KVDto<String>>> fetchLogos() throws BaseAppException {
        return ResultDto.SUCCESS(searchProvider().fetchLogos());
    }
}
