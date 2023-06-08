package com.jansora.repo.core.exception.auth;

import com.jansora.repo.core.exception.BaseException;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
public class UnauthorizedException extends BaseException {

    public UnauthorizedException() {
        super("403", "未获取凭证或凭证已到期，请重新登录");
    }
    public UnauthorizedException(String errorDesc) {
        super("403", errorDesc);
    }
}
