package com.jansora.repo.core.exception;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class BaseException extends Exception {


    /*
       errorCode
     */
    protected String errorClass = this.getClass().getName();
    /*
       errorCode
     */
    protected String errorCode;
    /*
      errorDesc
    */
    protected String errorDesc;

    public BaseException(Throwable throwable) {
        super(throwable.getLocalizedMessage());
        this.errorDesc = throwable.getLocalizedMessage();
    }

    public BaseException(String errorDesc) {
        super(errorDesc);
        this.errorDesc = errorDesc;
    }

    public BaseException(String errorCode, String errorDesc) {
        super(errorDesc);
        this.errorCode = errorCode;
        this.errorDesc = errorDesc;
    }

    public RuntimeException toRuntimeException() {
        return new RuntimeException(this.errorDesc);
    }





}
