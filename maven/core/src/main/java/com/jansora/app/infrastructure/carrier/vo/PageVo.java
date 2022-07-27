package com.jansora.app.infrastructure.carrier.vo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.List;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan <br>
 * @version 1.0 <br>

 * @since <br>
 */
public class PageVo<T> extends BaseVo implements Serializable {

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
    protected long total;

    /**
     * 总数 <br>
     */
    @JsonProperty("data")
    private List<T> data;

    public PageVo() {
    }


    public static <T> PageVo<T> build(List<T> data, long total) {
        PageVo<T> pageDto = new PageVo<>();
        pageDto.setData(data);
        pageDto.setTotal(total);
        return pageDto;
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

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<T> getData() {
        return this.data;
    }

    public void setData(List<T> data) {
        this.data = data;
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
}
