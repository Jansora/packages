package com.jansora.repo.core.exception.web;

import com.jansora.repo.core.exception.BaseException;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
public class BadRequestException extends BaseException {

    public BadRequestException() {
        super("400", "请求错误");
    }
    public BadRequestException(String errorDesc) {
        super("400", errorDesc);
    }
}
