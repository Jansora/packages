package com.jansora.app.infrastructure.entity;

/**
 * <Description> Description for AuthEntity <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @transId null
 * @CreateDate 2021/12/1 09:25:23 <br>
 * @see com.jansora.app.infrastructure.entity <br>
 * @since 1.0 <br>
 */
public class AuthEntity extends BaseEntity {

    Long authId;

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
