package com.jansora.repo.core.exception.dao;

import com.jansora.repo.core.exception.BaseException;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
public class DataConflictException extends BaseException {

    public DataConflictException() {
        super("409", "服务器已存在重复资源");
    }
    public DataConflictException(String errorDesc) {
        super("409", errorDesc);
    }
}
