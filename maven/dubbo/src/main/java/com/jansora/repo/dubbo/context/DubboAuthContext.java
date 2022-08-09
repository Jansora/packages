package com.jansora.repo.dubbo.context;

import com.jansora.app.repo.core.payload.valobj.AuthValObj;

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
public class DubboAuthContext {


    private static final ThreadLocal<Long> context = new ThreadLocal<>();

    public static void setContext(Long authId) {
        context.set(authId);
    }
    public static void clear() {
        context.remove();
    }

    private static Long token() {
        Long auth = context.get();

        if (Objects.isNull(auth)) {
            context.set(-1L);
            return context.get();
        }
        return auth;
    }

    public static AuthValObj auth() {
        return AuthValObj.of(token());
    }

    public static boolean empty() {
        return -1 == token();
    }

}
