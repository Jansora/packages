package com.jansora.repo.mysql.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jansora.app.repo.core.utils.JsonUtils;
import tk.mybatis.mapper.annotation.KeySql;
import tk.mybatis.mapper.code.IdentityDialect;

import javax.persistence.Id;
import java.util.Date;

/**
 * <Description> Description for BaseDo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/29 PM01:50 <br>
 * @since 1.0 <br>
 */
public abstract class BaseDo {

    @Id
    @KeySql(useGeneratedKeys = true, dialect = IdentityDialect.MYSQL)
    protected Long id;

    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    protected Date createdAt;

    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    protected Date updatedAt;

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
        return JsonUtils.toJsonIgnoreError(this);
    }
}
