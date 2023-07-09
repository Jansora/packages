package com.jansora.repo.rpc.exception;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-27 15:24:04
 */
import com.fasterxml.jackson.databind.JsonNode;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.transform.FormatException;
import com.jansora.repo.core.utils.JsonUtils;
import feign.Response;
import feign.codec.ErrorDecoder;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.InvocationTargetException;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

public class CustomErrorDecoder implements ErrorDecoder {

    private final ErrorDecoder defaultErrorDecoder = new Default();

    @Override
    public Exception decode(String methodKey, Response response) {
        // 在这里，你可以根据响应的状态码，头信息等来决定是否抛出自定义异常
        if (response.status() == 404) {
            return new BaseException("自定义404错误");
        }
        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(response.body().asInputStream(), StandardCharsets.UTF_8));
            StringBuilder builder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                builder.append(line);
            }
            String responseBody = builder.toString();
            JsonNode result = JsonUtils.fromJson(responseBody);

            BaseException exception;
            if (Objects.nonNull(result.get("errorClass"))) {
                exception = (BaseException) Class.forName(result.get("errorClass").asText()).getDeclaredConstructor().newInstance();
            }
            else {
                exception = new BaseException("500","未知异常");
            }


//            BaseException exception = (BaseException) Class.forName(result.get("errorClass").asText()).getDeclaredConstructor().newInstance();

              exception.setErrorCode(result.get("errorCode").asText());
              exception.setErrorDesc(result.get("errorDesc").asText());

            return exception;
            // 在这里你可以使用响应体的内容来创建自定义的异常
//            return new Exception("自定义错误，响应体内容: " + responseBody);
        } catch (IOException e) {
//            return new Exception("自定义错误，读取响应体时出错");
        }
        catch (FormatException e) {
//            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {

        } catch (InvocationTargetException e) {
        } catch (InstantiationException e) {

        } catch (IllegalAccessException e) {

        } catch (NoSuchMethodException e) {

        }


        // 其他情况使用默认的错误解码器
        return defaultErrorDecoder.decode(methodKey, response);
    }
}
