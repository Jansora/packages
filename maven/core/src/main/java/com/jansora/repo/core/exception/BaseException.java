package com.jansora.repo.core.exception;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2020/12/02 15:47:59
 */
public class BaseException extends Exception {

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

    public String getErrorCode() {
        return this.errorCode;
    }

    public String getErrorDesc() {
        return this.errorDesc;
    }


    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public void setErrorDesc(String errorDesc) {
        this.errorDesc = errorDesc;
    }




}
