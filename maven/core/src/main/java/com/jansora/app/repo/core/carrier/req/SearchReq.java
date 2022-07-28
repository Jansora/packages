package com.jansora.app.repo.core.carrier.req;

import java.io.Serializable;

/**
 * <Description> Description for SearchReq <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:39 <br>
 * @since 1.0 <br>
 */
public class SearchReq extends PageReq implements Serializable {

    /**
     * 名称
     */
    protected String name;

    /**
     * 分类
     */
    protected String classify;

    /**
     * 标签
     */
    protected String tag;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClassify() {
        return classify;
    }

    public void setClassify(String classify) {
        this.classify = classify;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
