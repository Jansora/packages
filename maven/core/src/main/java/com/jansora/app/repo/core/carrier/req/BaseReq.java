package com.jansora.app.repo.core.carrier.req;

import com.jansora.app.repo.core.carrier.dto.BaseDto;

/**
 * <Description> Description for BaseReq <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/1 AM11:58 <br>
 * @since 1.0 <br>
 */
public class BaseReq extends BaseDto {

    /**
     * 认证id
     */
    Long authId;

    /**
     * 认证 token
     */
    String authToken;

    public Long getAuthId() {
        return authId;
    }

    public void setAuthId(Long authId) {
        this.authId = authId;
    }

    public String getAuthToken() {
        return authToken;
    }

    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }
}
