package com.jansora.repo.core.exception.dao;

import com.jansora.repo.core.exception.BaseException;

public class DataLogicErrorException extends BaseException {
    public DataLogicErrorException() {
        super("500", "数据库逻辑错误，请检查");
    }
    public DataLogicErrorException(String errorDesc) {
        super("500", errorDesc);
    }
}
