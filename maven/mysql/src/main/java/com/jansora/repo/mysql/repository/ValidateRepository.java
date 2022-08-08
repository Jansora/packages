package com.jansora.repo.mysql.repository;

import com.jansora.app.repo.core.exception.auth.ForbiddenException;
import com.jansora.app.repo.core.exception.dao.DataNotFoundException;
import com.jansora.repo.mysql.mapper.QueryMapper;
import com.jansora.repo.mysql.payload.ConditionSQLDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

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
    public void validate(String tableName, List<ConditionSQLDto> conditions) throws DataNotFoundException {
        if (!queryMapper.isExist(tableName, conditions)) {
            throw new DataNotFoundException();
        }
    }

    /**
     * 是否存在
     */
    public void validateId(String tableName, Long id) throws DataNotFoundException {
        if (!queryMapper.isExist(tableName, List.of(new ConditionSQLDto("id", "=", id)))) {
            throw new DataNotFoundException();
        }
    }

    /**
     * 校验归属
     */
    public void validateOwner(String tableName, Long id, Long ownerId) throws DataNotFoundException, ForbiddenException {
        String existUserId = queryMapper.queryOne(tableName, "userId", List.of(new ConditionSQLDto("id", "=", id)));
        if (!StringUtils.hasText(existUserId)) {
            throw new DataNotFoundException();
        }

        if (!String.valueOf(ownerId).equals(existUserId)) {
            throw new ForbiddenException();
        }
    }


    /**
     * 校验可读性
     */
    public void validateReadability(String tableName, Long id, Long ownerId) throws DataNotFoundException, ForbiddenException {

        String enabled = queryMapper.queryOne(tableName, "enabled", List.of(new ConditionSQLDto("id", "=", id)));

        // 1 代表公开
        if (StringUtils.hasText(enabled) && enabled.equals("1")) {
            return;
        }

        // 不公开的话, 校验拥有者
        this.validateOwner(tableName, id, ownerId);

    }


}
