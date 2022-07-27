package com.jansora.app.infrastructure.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.StringJoiner;

/**
 * <Description> Description for BaseEntity <br>
 * 所有的实体都应该继承这个
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @transId null
 * @CreateDate 2021/11/30 19:41:23 <br>
 * @see com.jansora.app.infrastructure.entity <br>
 * @since 1.0 <br>
 */
public class BaseEntity {

    /**
     * 唯一标识
     */
    Long id;

    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    Date createdAt;

    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    Date updatedAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", BaseEntity.class.getSimpleName() + "[", "]")
                .add("createdAt=" + createdAt)
                .add("id=" + id)
                .add("updatedAt=" + updatedAt)
                .toString();
    }
}
