package com.jansora.repo.core.payload.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jansora.repo.core.factory.repository.entity.ModelFactory;
import com.jansora.repo.core.payload.Base;
import io.mybatis.provider.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-27 23:31:58
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Entity.Table(value = "base", remark = "系统用户", autoResultMap = true)
public abstract class BaseDo extends Base implements ModelFactory {

    /**
     * 表名
     */
    private transient String tableName;

    /**
     * 主键 id
     */
    @Entity.Column(id = true, remark = "主键", updatable = false, insertable = false)
    private Long id;

    /**
     * 创建时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    @Entity.Column(value = "created_at", remark = "创建时间")
    private Date createdAt;

    /**
     * 更新时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    @Entity.Column(value = "updated_at", remark = "更新时间")
    private Date updatedAt;


    @Override
    public String tableName() {
        if (tableName == null) {
            tableName = ModelFactory.super.tableName();
        }
        return tableName;
    }
}
