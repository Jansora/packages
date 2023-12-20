package com.jansora.repo.core.exception.transform;

import com.jansora.repo.core.exception.BaseException;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
public class FormatException extends BaseException {

    public FormatException() {
        super("500", "格式化时出现异常");
    }
    public FormatException(String errorDesc) {
        super("500", errorDesc);
    }
}
