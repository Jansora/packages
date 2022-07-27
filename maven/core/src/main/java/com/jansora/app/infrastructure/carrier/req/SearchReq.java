package com.jansora.app.infrastructure.carrier.req;

public class SearchReq extends PageReq {

    /**
     * 名称
     */
    protected String name;

    /**
     * 是否启用
     */
    protected Boolean enabled;

    /**
     * 分类
     */
    protected String classify;

    /**
     * 标签
     */
    protected String logo;

    /**
     * 标签
     */
    protected String tag;

    /**
     * 归属用户
     */
    protected Long userId;

}
