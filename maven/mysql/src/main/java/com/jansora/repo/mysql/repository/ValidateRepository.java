package com.jansora.repo.mysql.repository;

import com.jansora.repo.mysql.mapper.QueryMapper;
import com.jansora.repo.mysql.payload.ConditionSQLDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/8 AM10:28 <br>
 * @since 1.0 <br>
 */
@Repository
public class ValidateRepository {

    @Autowired
    QueryMapper queryMapper;

    /**
     * 是否存在
     */
    public Boolean isExist(String tableName, List<ConditionSQLDto> conditions) {
        return queryMapper.isExist(tableName, conditions);
    }

}
