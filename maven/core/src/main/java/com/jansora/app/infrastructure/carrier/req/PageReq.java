package com.jansora.app.infrastructure.carrier.req;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan <br>
 * @version 1.0 <br>

 * @since <br>
 */
public class PageReq extends BaseReq implements Serializable {

//    /**
//     * 每页大小 <br>
//     */
//    protected int pageSize;
//
//    /**
//     * 当前页数, 从 1 开始 <br>
//     */
//    protected int pageNum;

    /**
     * 排序方式 ASC / DESC <br>
     */
    protected String sort;

    /**
     * 排序字段 <br>
     */
    protected String orderBy;

    /**
     * 每页大小 <br>
     */
    @JsonIgnore
    protected int limit;

    /**
     * 当前页数, 从 0 开始 <br>
     */
    @JsonIgnore
    protected int offset;

    /**
     * 总数 <br>
     */
    protected long total;


    public PageReq() {
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getOrderBy() {
        return orderBy;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }
}
