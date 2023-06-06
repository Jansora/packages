package com.jansora.repo.mysql.repository;

import com.jansora.repo.mysql.mapper.QueryMapper;
import com.jansora.repo.mysql.payload.ConditionSQLDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

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
public class QueryRepository {

    QueryMapper queryMapper;

    /**
     * 查询一条数据
     */
    public String queryOne(String tableName, String fieldName, List<ConditionSQLDto> conditions) {
        return queryMapper.queryOne(tableName, fieldName, conditions);
    }

    /**
     * 查询多条数据
     */
    public List<String> query(String tableName, String fieldName, List<ConditionSQLDto> conditions) {
        return queryMapper.query(tableName, fieldName, conditions);
    }


    /**
     * 查询多条数据
     */
    public Long nextSeq(String tableName, String fieldName, List<ConditionSQLDto> conditions) {
        List<Long> seq = queryMapper.query(tableName, fieldName, conditions).stream().map(Long::new).sorted().collect(Collectors.toList());
        return this.nextSeq(CollectionUtils.isEmpty(seq) ? 0L : seq.get(seq.size() - 1));
    }

    /**
     * 或许下一个序号, 如果有, 则加一, 如果无则为一
     * @param seq
     * @return
     */
    private Long nextSeq(Long seq) {
        if (Objects.isNull(seq)) {
            return 1L;
        }
        return ++seq;
    }

}
