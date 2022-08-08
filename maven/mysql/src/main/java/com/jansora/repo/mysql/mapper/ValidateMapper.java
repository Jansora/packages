package com.jansora.repo.mysql.mapper;

import com.jansora.repo.mysql.payload.ConditionSQLDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <Description>  <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/8 AM10:29 <br>
 * @since 1.0 <br>
 */
public interface ValidateMapper {

    Boolean isExist(@Param("tableName") String tableName, @Param("conditions") List<ConditionSQLDto> conditions);

}
