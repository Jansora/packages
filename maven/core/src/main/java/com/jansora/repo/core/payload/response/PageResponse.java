package com.jansora.repo.core.payload.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


/**
 * <Description> Description for PageVo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:30 <br>
 * @since 1.0 <br>
 */
public class PageResponse<T> extends BaseResponse {

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
    protected long total;

    /**
     * 载荷 <br>
     */
    @JsonProperty("data")
    private List<T> data;

    public PageResponse() {
    }

    public static <T> PageResponse<T> build(List<T> data, long total) {
        PageResponse<T> pageDto = new PageResponse<>();
        pageDto.setData(data);
        pageDto.setTotal(total);
        return pageDto;
    }

    public int getPageSize() {
        return this.pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNum() {
        return this.pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public long getTotal() {
        return this.total;
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
