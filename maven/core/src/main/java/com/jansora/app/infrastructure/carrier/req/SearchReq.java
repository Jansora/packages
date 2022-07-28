package com.jansora.app.infrastructure.carrier.req;

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

}
