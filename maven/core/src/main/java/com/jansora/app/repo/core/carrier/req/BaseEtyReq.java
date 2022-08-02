package com.jansora.app.repo.core.carrier.req;

/**
 * <Description> Description for BaseEtyReq <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/2 AM11:01 <br>
 * @since 1.0 <br>
 */
public class BaseEtyReq extends BaseReq {
    /**
     * 唯一标识
     */
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
