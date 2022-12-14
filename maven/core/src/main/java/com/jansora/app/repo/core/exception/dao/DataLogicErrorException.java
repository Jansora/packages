package com.jansora.app.repo.core.exception.dao;

import com.jansora.app.repo.core.exception.BaseAppException;

public class DataLogicErrorException extends BaseAppException {
    public DataLogicErrorException() {
        super("500", "数据库逻辑错误，请检查");
    }
    public DataLogicErrorException(String errorDesc) {
        super("500", errorDesc);
    }
}
