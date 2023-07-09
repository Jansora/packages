package com.jansora.repo.spring;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.transform.FormatException;
import com.jansora.repo.core.payload.dto.ResultDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan 2020/11/27 23:08:18  <br>
 * @version 1.0 <br>
 * 
 * @since 1.0 <br>
 */
@RestControllerAdvice
public class SpringExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringExceptionHandler.class);

    private static final String LOG_PREFIX = "SpringExceptionHandler: ";

//    /**
//     * <Description> 格式化数据出现异常 <br>
//     * @author zhang.yangyuan 2020/11/26 18:17:12 <br>
//     *
//     * */
//    @ExceptionHandler(FeignException.class)
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    public ResultDto<Object> handleFeignException(FeignException e) {
//        LOGGER.error(LOG_PREFIX + e.getClass().getSimpleName() + " has reached." , e);
//        return ResultDto.FAIL(new BaseException("RPC 接口调用失败"));
//    }

    /**
     * <Description> 格式化数据出现异常 <br>
     * @author zhang.yangyuan 2020/11/26 18:17:12 <br>
     *
     * */
    @ExceptionHandler(NumberFormatException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResultDto<Object> handleNumberFormatException(NumberFormatException e) {
        LOGGER.error(LOG_PREFIX + e.getClass().getSimpleName() + " has reached." , e);
        return ResultDto.FAIL(new FormatException());
    }

//    /**
//     * <Description> Exception <br>
//     * @author zhang.yangyuan 2020/11/26 18:17:12 <br>
//     *
//     * */
//    @ExceptionHandler({RpcException.class})
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    public ResultDto<Object> handleRuntimeException(RpcException e) {
//        LOGGER.error(LOG_PREFIX + e.getClass().getSimpleName() + " has reached." , e);
//        BaseException exception = new BaseException("500", "远程调用出现异常" + e.getMessage());
//        return  ResultDto.FAIL(exception);
//    }
    /**
     * <Description> Exception <br>
     * @author zhang.yangyuan 2020/11/26 18:17:12 <br>
     *
     * */
    @ExceptionHandler({BaseException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResultDto<Object> handleRuntimeException(BaseException e) {
        LOGGER.error(LOG_PREFIX + e.getClass().getSimpleName() + " has reached." , e);
        return ResultDto.FAIL(e);
    }
    /**
     * <Description> Exception <br>
     * @author zhang.yangyuan 2020/11/26 18:17:12 <br>
     * 
     * */
    @ExceptionHandler({RuntimeException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResultDto<Object> handleRuntimeException(RuntimeException e) {
        LOGGER.error(LOG_PREFIX + e.getClass().getSimpleName() + " has reached." , e);
        String msg = e.getLocalizedMessage().split("\n")[0];
        if (msg.startsWith("com.jansora") && msg.split(":").length == 2) {
            return ResultDto.FAIL(new BaseException(msg.split(":")[1]));
        }

        return  ResultDto.FAIL(new BaseException("500", "Uncapped RuntimeException"));
    }

    /**
     * <Description> Exception <br>
     * @author zhang.yangyuan 2020/11/26 18:17:12 <br>
     * 
     * */
    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResultDto<Object> handleException(Exception e) {
        LOGGER.error(LOG_PREFIX + e.getClass().getSimpleName() + " has reached." , e);
        BaseException exception = new BaseException("500", "未知异常");
        return  ResultDto.FAIL(exception);
    }

}
