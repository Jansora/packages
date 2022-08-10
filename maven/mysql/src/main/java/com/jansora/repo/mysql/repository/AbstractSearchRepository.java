package com.jansora.repo.mysql.repository;

import com.jansora.app.repo.core.payload.dto.KVDto;
import com.jansora.app.repo.core.payload.req.SearchReq;
import com.jansora.app.repo.core.payload.valobj.AuthValObj;
import com.jansora.app.repo.core.payload.vo.PageVo;
import com.jansora.app.repo.core.payload.vo.SearchVo;
import com.jansora.app.repo.core.repository.SearchRepositoryFactory;
import com.jansora.app.repo.core.utils.NumberUtils;
import com.jansora.repo.mysql.mapper.SearchMapper;

import java.util.List;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/10 AM10:38 <br>
 * @since 1.0 <br>
 */
public abstract class AbstractSearchRepository implements SearchRepositoryFactory {
    
    /**
     * 获取表名
     */
    public abstract String tableName();

    /**
     * search mapper
     */
    public abstract SearchMapper searchMapper();

    /**
     * 搜索正文
     */
    @Override
    public PageVo<SearchVo> search(SearchReq req, AuthValObj auth) {
        PageVo<SearchVo> result = new PageVo<>();
        result.setData(searchMapper().search(req, tableName(), auth));
        result.setTotal(searchMapper().searchCount(req, tableName(), auth));
        return result;
    }

    /**
     * 搜索 classify
     */
    @Override
    public List<KVDto<Long>> fetchClassifyCounts(AuthValObj auth) {
        return searchMapper().fetchClassifyCounts(tableName(), auth);
    }

    /**
     * 搜索 tag
     */
    @Override
    public List<KVDto<Long>> fetchTags(String classify, AuthValObj auth) {
        return NumberUtils.buildCounts(searchMapper().findTagCounts(tableName(), classify, auth));
    }

    /**
     * 搜索 logo
     */
    @Override
    public List<KVDto<String>> fetchLogos(AuthValObj auth) {
        return searchMapper().fetchLogos(tableName(), auth);
    }
}
