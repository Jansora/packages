package com.jansora.app.repo.core.payload.vo;

/**
 * <Description> Description for BaseEtyVo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/1 AM11:59 <br>
 * @since 1.0 <br>
 */
public class BaseEtyVo extends BaseVo {
    /**
     * 唯一标识
     */
    protected Long id;

    protected String createdAt;

    protected String updatedAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }
}
