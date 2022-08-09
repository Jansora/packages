package com.jansora.app.repo.core.payload.valobj;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM12:19 <br>
 * @since 1.0 <br>
 */
public class AuthValObj extends BaseValObj {

    /**
     * 认证id
     */
    Long authId;

    /**
     * 认证 token
     */
    String authToken;

    public AuthValObj() {

    }
    public AuthValObj(Long authId) {
        this.authId = authId;
    }

    public AuthValObj(Long authId, String authToken) {
        this.authId = authId;
        this.authToken = authToken;
    }

    public Long getAuthId() {
        return authId;
    }

    public String getAuthToken() {
        return authToken;
    }


}
