package com.jansora.app.infrastructure.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class PageEntity extends AuthEntity {

    /**
     * 每页大小 <br>
     */
    @JsonIgnore
    protected int pageSize;

    /**
     * 当前页数, 从 1 开始 <br>
     */
    @JsonIgnore
    protected int pageNum;

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
    @JsonIgnore
    protected long total;


    /**
     * 排序方式 ASC / DESC <br>
     */
    @JsonIgnore
    protected String sort;

    /**
     * 排序字段 <br>
     */
    @JsonIgnore
    protected String orderBy;

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
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
}
