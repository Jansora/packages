package com.jansora.app.infrastructure.carrier.valobj;

import java.io.Serializable;

public class AuthValObj implements Serializable {

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
