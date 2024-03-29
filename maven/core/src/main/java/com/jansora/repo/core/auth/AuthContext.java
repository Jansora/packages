package com.jansora.repo.core.auth;

import com.jansora.repo.core.payload.valobj.AuthValueObject;

import java.util.Objects;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM02:10 <br>
 * @since 1.0 <br>
 */
public class AuthContext {



    private static final ThreadLocal<AuthValueObject> context = new ThreadLocal<>();

    public static void setContext(AuthValueObject auth) {
        context.set(auth);
    }
    public static void clear() {
        context.remove();
    }


    public static AuthValueObject auth() {
        AuthValueObject auth = context.get();

        if (Objects.isNull(auth)) {
            context.set(new AuthValueObject(-1L, Role.NULL.role()));
            return context.get();
        }
        return auth;
    }

    public static boolean empty() {
        return -1 == auth().getAuthId();
    }

}
