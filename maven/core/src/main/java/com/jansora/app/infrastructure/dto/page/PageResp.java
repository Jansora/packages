package com.jansora.app.infrastructure.dto.page;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.List;
import java.util.StringJoiner;

/**
 * <Description> Description for PageResp <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @transId null
 * @CreateDate 2021/11/18 12:27:37 <br>
 * @see com.jansora.app.infrastructure.dto.resp <br>
 * @since 1.0 <br>
 */
public class PageResp<T> implements Serializable {

    /**
     * 每页大小 <br>
     */
    @JsonIgnore
    protected int pageSize;

    /**
     * 当前页数, 从 0 开始 <br>
     */
    @JsonIgnore
    protected int pageNum;

    /**
     * 总数 <br>
     */
    protected long total;

    /**
     * 总数 <br>
     */
    @JsonProperty("data")
    private List<T> data;

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
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public PageResp(List<T> data, PageReq req) {
        this.data = data;
        this.pageNum = req.getPageNum();
        this.pageSize = req.getPageSize();
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", PageResp.class.getSimpleName() + "[", "]")
                .add("data=" + data)
                .add("pageNum=" + pageNum)
                .add("pageSize=" + pageSize)
                .add("total=" + total)
                .toString();
    }
}
