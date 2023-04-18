package com.jansora.repo.core.factory.repository;

import com.jansora.repo.core.exception.web.InvalidArgumentException;
import com.jansora.repo.core.factory.mapper.SearchMapper;
import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.response.SearchResponse;
import com.jansora.repo.core.payload.valobj.AuthValueObject;
import com.jansora.repo.core.utils.NumberUtils;

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
public interface SearchableRepositoryFactory {

    /**
     * 获取表名
     */
    abstract String tableName();

    /**
     * search mapper
     */
    abstract SearchMapper searchMapper();

    /**
     * 搜索正文
     */
    default PageResponse<SearchResponse> search(SearchableRequest req, AuthValueObject auth) throws InvalidArgumentException {
        PageResponse<SearchResponse> result = new PageResponse<>();
        int pageSize = req.getPageSize();
        int pageNum = req.getPageNum();
        if (req.getPageNum() < 1) {
            throw new InvalidArgumentException("pageNum should be > 0");
        }
        if (req.getPageSize() < 1) {
            throw new InvalidArgumentException("pageSize should be > 0");
        }
        if (req.getPageSize() > 10000) {
            throw new InvalidArgumentException("pageSize should be < 10000");
        }
        req.setPageNum((req.getPageNum() - 1) * req.getPageSize());
        result.setPageSize(pageSize);
        result.setPageNum(pageNum);

        result.setData(searchMapper().search(req, tableName(), auth));
        result.setTotal(searchMapper().searchCount(req, tableName(), auth));
        return result;
    }

    /**
     * 搜索 classify
     */
    default List<KVDto<Long>> fetchClassifyCounts(AuthValueObject auth) {
        return searchMapper().fetchClassifyCounts(tableName(), auth);
    }

    /**
     * 搜索 tag
     */
    default List<KVDto<Long>> fetchTags(String classify, AuthValueObject auth) {
        return NumberUtils.buildCounts(searchMapper().findTagCounts(tableName(), classify, auth));
    }

    /**
     * 搜索 logo
     */
    default List<KVDto<String>> fetchLogos(AuthValueObject auth) {
        return searchMapper().fetchLogos(tableName(), auth);
    }

}
