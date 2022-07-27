package com.jansora.app.infrastructure.dto.page;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.StringJoiner;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan <br>
 * @since <br>
 */
public class PageReq implements Serializable {

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

    public PageReq() {
    }

    public int getLimit() {
        return this.limit;
    }

    public int getOffset() {
        return this.offset;
    }

    public long getTotal() {
        return this.total;
    }

    public String getSort() {
        return this.sort;
    }

    public String getOrderBy() {
        return this.orderBy;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

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


    @Override
    public String toString() {
        return new StringJoiner(", ", PageReq.class.getSimpleName() + "[", "]")
                .add("limit=" + limit)
                .add("offset=" + offset)
                .add("orderBy='" + orderBy + "'")
                .add("pageNum=" + pageNum)
                .add("pageSize=" + pageSize)
                .add("sort='" + sort + "'")
                .add("total=" + total)
                .toString();
    }
}
