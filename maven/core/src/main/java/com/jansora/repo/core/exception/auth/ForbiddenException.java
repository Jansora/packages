package com.jansora.repo.core.exception.auth;

import com.jansora.repo.core.exception.BaseException;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
public class ForbiddenException extends BaseException {
    public ForbiddenException() {
        super("403", "访问被禁止");
    }
    public ForbiddenException(String errorDesc) {
        super("403", errorDesc);
    }
}
