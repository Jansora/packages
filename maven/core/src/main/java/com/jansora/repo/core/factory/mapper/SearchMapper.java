package com.jansora.repo.core.factory.mapper;

import com.jansora.repo.core.payload.dto.KVDto;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.SearchResponse;
import com.jansora.repo.core.payload.valobj.AuthValueObject;
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

    Long searchCount(@Param("req") SearchableRequest req, @Param("tableName") String tableName, @Param("auth") AuthValueObject auth);

    List<SearchResponse> search(@Param("req") SearchableRequest req, @Param("tableName") String tableName, @Param("auth") AuthValueObject auth);

    List<KVDto<Long>> fetchClassifyCounts(@Param("tableName") String tableName, @Param("auth") AuthValueObject auth);

    List<KVDto<Long>> findTagCounts(@Param("tableName") String tableName, @Param("classify") String classify, @Param("auth") AuthValueObject auth);

    List<KVDto<String>> fetchLogos(@Param("tableName") String tableName, @Param("auth") AuthValueObject auth);

}
