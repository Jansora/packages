package com.jansora.repo.core.exception.system;

import com.jansora.repo.core.exception.BaseException;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-01 09:10:56
 */
public class InitializationException extends BaseException {
    public InitializationException() {
        super("500", "初始化异常");
    }
    public InitializationException(String errorDesc) {
        super("500", errorDesc);
    }
}