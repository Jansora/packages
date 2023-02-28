package com.jansora.repo.core.context;

import com.jansora.repo.core.auth.Role;
import com.jansora.repo.core.payload.valobj.AuthValObj;

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



    private static final ThreadLocal<AuthValObj> context = new ThreadLocal<>();

    public static void setContext(AuthValObj auth) {
        context.set(auth);
    }
    public static void clear() {
        context.remove();
    }


    public static AuthValObj auth() {
        AuthValObj auth = context.get();

        if (Objects.isNull(auth)) {
            context.set(new AuthValObj(-1L, Role.NULL.role()));
            return context.get();
        }
        return auth;
    }

    public static boolean empty() {
        return -1 == auth().getAuthId();
    }

}
