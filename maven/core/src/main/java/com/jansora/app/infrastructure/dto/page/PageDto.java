package com.jansora.app.infrastructure.dto.page;

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
public class PageDto<T> implements Serializable {

    /**
     * 每页大小 <br>
     */
    private int pageSize;

    /**
     * 当前页数, 从 1 开始 <br>
     */
    private int pageNum;

    /**
     * 总数 <br>
     */
    private long total;

    /**
     * 总数 <br>
     */
    @JsonProperty("data")
    private List<T> data;

    public PageDto() {
    }


    public static <T> PageDto<T> build(List<T> data, long total) {
        PageDto<T> pageDto = new PageDto<>();
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

}
