package com.jansora.repo.core.payload.valobj;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

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

    private static final Map<Long, AuthValObj> cache = new HashMap<>();

    /**
     * 认证id
     */
    Long authId;

    public static AuthValObj of(Long authId) {
        if (Objects.nonNull(authId) && authId < 128 && authId > -128) {
            AuthValObj auth = cache.get(authId);
            if (Objects.nonNull(auth)) {
                return auth;
            }
            cache.put(authId, new AuthValObj(authId));
        }
        return new AuthValObj(authId);
    }

    public AuthValObj() {

    }


    public AuthValObj(Long authId) {
        this.authId = authId;
    }

    public Long getAuthId() {
        return authId;
    }


    public void setAuthId(Long authId) {
        this.authId = authId;
    }

}
