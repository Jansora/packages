package com.jansora.repo.mysql.repository;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.exception.dao.DataConflictException;
import com.jansora.repo.core.exception.dao.DataNotFoundException;
import com.jansora.repo.core.exception.web.InvalidArgumentException;
import com.jansora.repo.core.utils.AssertUtils;
import com.jansora.repo.mysql.mapper.QueryMapper;
import com.jansora.repo.mysql.payload.ConditionSQLDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;

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
@AllArgsConstructor
public class ValidateRepository {

    QueryMapper queryMapper;

    /**
     * 是否存在
     */
    public void exist(String tableName, List<ConditionSQLDto> conditions) throws DataNotFoundException, InvalidArgumentException {
        AssertUtils.strNonNull(tableName);
        AssertUtils.collectionNonNull(conditions);
        if (!queryMapper.isExist(tableName, conditions)) {
            throw new DataNotFoundException();
        }
    }

    /**
     * 存在
     *
     */
    public void existId(String tableName, Long id) throws DataConflictException, InvalidArgumentException {
        AssertUtils.strNonNull(tableName);
        AssertUtils.nonNull(id);
        if (!queryMapper.isExist(tableName, List.of(new ConditionSQLDto("id", "=", id)))) {
            throw new DataConflictException();
        }
    }

    /**
     * 不存在编码
     */
    public void notExistCode(String tableName, String code) throws DataConflictException, InvalidArgumentException {
        AssertUtils.strNonNull(tableName, code);
        AssertUtils.nonNull(code);

        if (queryMapper.isExist(tableName,  List.of(new ConditionSQLDto("code", "=", code)))) {
            throw new DataConflictException();
        }
    }


    /**
     * 不存在编码
     */
    public void notExistCode(String tableName, Long id, String code) throws DataConflictException, InvalidArgumentException {
        AssertUtils.strNonNull(tableName);
        AssertUtils.nonNull(id);

        String existId = queryMapper.queryOne(tableName, "id", List.of(new ConditionSQLDto("code", "=", code)));

        if (!String.valueOf(id).equals(existId)) {
            throw new DataConflictException();
        }
    }

    /**
     * 不存在
     */
    public void notExistId(String tableName, Long id) throws DataNotFoundException, InvalidArgumentException {
        AssertUtils.strNonNull(tableName);
        AssertUtils.nonNull(id);
        if (queryMapper.isExist(tableName, List.of(new ConditionSQLDto("id", "=", id)))) {
            throw new DataNotFoundException();
        }
    }


    /**
     * 校验可读性
     */
    public boolean readable(String tableName, Long id) {
        if (!StringUtils.hasText(tableName) || Objects.isNull(id)) {
            return false;
        }

        String enabled = queryMapper.queryOne(tableName, "enabled", List.of(new ConditionSQLDto("id", "=", id)));

        // 1 代表公开
        if (StringUtils.hasText(enabled) && enabled.equals("1")) {
            return true;
        }

        // 不公开的话, 校验拥有者
        return this.editable(tableName, id);

    }

    /**
     * 校验可编辑
     */
    public boolean editable(String tableName, Long id) {
        if (!StringUtils.hasText(tableName) || Objects.isNull(id)) {
            return false;
        }

        String existUserId = queryMapper.queryOne(tableName, "user_id", List.of(new ConditionSQLDto("id", "=", id)));
        if (!StringUtils.hasText(existUserId)) {
            return false;
        }
        // 校验拥有者
        return String.valueOf(AuthContext.auth().getAuthId()).equals(existUserId);
    }

}
