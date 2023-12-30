package com.jansora.repo.core.payload.valobj;

import com.jansora.repo.core.auth.Role;
import com.jansora.repo.core.utils.JsonUtils;
import lombok.Getter;

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
@Getter
public class AuthValueObject extends BaseValueObject {

    private static final Map<Long, AuthValueObject> cache = new HashMap<>();

    /**
     * 认证id
     */
    Long authId;


    /**
     * 角色
     */
    Role role;

    public static AuthValueObject of(Long authId, String role) {
        if (Objects.nonNull(authId) && authId < 128 && authId > -128) {
            AuthValueObject auth = cache.get(authId);
            if (Objects.nonNull(auth)) {
                return auth;
            }
            cache.put(authId, new AuthValueObject(authId, role));
        }
        return new AuthValueObject(authId, role);
    }

    public AuthValueObject() {
        this.authId = -1L;
        this.role = Role.NULL;
    }

    public AuthValueObject(Long authId, String role) {
        this.authId = authId;
        this.role = Role.of(role);
    }


    @Override
    public String toString() {
        return this.getClass().getName() + ":" + JsonUtils.toNonPrettyJsonIgnoreError(this);
    }
}
