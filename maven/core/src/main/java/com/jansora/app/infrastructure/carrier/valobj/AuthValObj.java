package com.jansora.app.infrastructure.carrier.valobj;


import java.io.Serializable;

/**
 * <Description> Description for AuthValObj <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:32 <br>
 * @since 1.0 <br>
 */
public class AuthValObj implements Serializable {

    Long authId;

    String authToken;

    public AuthValObj() {
    }

    public Long getAuthId() {
        return this.authId;
    }

    public void setAuthId(Long authId) {
        this.authId = authId;
    }

    public String getAuthToken() {
        return this.authToken;
    }

    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }
}
