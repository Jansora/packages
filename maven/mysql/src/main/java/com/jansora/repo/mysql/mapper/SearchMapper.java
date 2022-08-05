package com.jansora.repo.mysql.mapper;

import com.jansora.app.repo.core.carrier.dto.KVDto;
import com.jansora.app.repo.core.carrier.req.SearchReq;
import com.jansora.app.repo.core.carrier.vo.SearchVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <Description> Description for MapperUtils <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/5 PM03:16 <br>
 * @since 1.0 <br>
 */
public interface SearchMapper {

    Long searchCount(SearchReq req, @Param("tableName") String tableName);

    List<SearchVo> search(@Param("req") SearchReq req, @Param("tableName") String tableName);

    List<KVDto<Long>> fetchClassifyCounts(@Param("tableName") String tableName);

    List<KVDto<Long>> findTagCounts(@Param("tableName") String tableName, @Param("classify") String classify);

}
