package com.jansora.repo.core.factory.repository.entity;

import com.jansora.repo.core.exception.dao.DataLogicErrorException;
import io.mybatis.provider.Entity;
import org.springframework.util.StringUtils;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-06 12:42:47
 */
@Entity.Table(value ="factory", remark = "factory", autoResultMap = true)
public interface ModelFactory {

    /**
     * 表名
     */
    default String tableName() {
        Entity.Table table = this.getClass().getAnnotation(Entity.Table.class);
        if (table == null || !StringUtils.hasText(table.value())) {
            throw new DataLogicErrorException("获取表名失败. Class:" + this.getClass().getName()).toRuntimeException();
        }
        return table.value();
    }
}
