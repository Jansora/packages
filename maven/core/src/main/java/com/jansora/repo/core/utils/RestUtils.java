package com.jansora.repo.core.utils;

import com.jansora.repo.core.exception.transform.FormatException;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.Serializable;
import java.util.Objects;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * @description:
 * @author: jansora
 */
@Slf4j
public final class RestUtils {

    private static final OkHttpClient okHttpClient = OkHttpClientHelper.INSTANCE.getClient();

    /**
     * 发起请求
     */
    public static void doRequest(Request request) {
        doRequest(request, (responseBody) -> true);
    }

    /**
     * 发起请求
     */
    public static void doRequest(Request request, Predicate<String> predicate) {
        doAtomicRequest(request, predicate, null, null);
    }


    /**
     * 发起请求
     */
    public static void doRequest(Request request, Consumer<String> successCallback) {
        doAtomicRequest(request, null, successCallback, null);
    }

    /**
     * 发起请求
     */
    public static void doRequest(Request request, Predicate<String> predicate, Consumer<String> successCallback) {
        doAtomicRequest(request, predicate, successCallback, null);
    }

    /**
     * 发起请求
     */
    public static void doAtomicRequest(Request request, Predicate<String> predicate, Consumer<String> successCallback, Consumer<Exception> errorCallback) {
        log.trace("RestHelper doRequest: request: {}", request);
        Response response = null;
        try {

            response = okHttpClient.newCall(request).execute();

            Assert.isTrue(response.isSuccessful(), "Rest 接口异常");
            Assert.isTrue(response.body() != null, "Rest 接口返回值为空异常");

            String responseBody = response.body().string();

            /**
             * 走自定义判断逻辑
             */
            if (null != predicate) {
                Assert.isTrue(predicate.test(responseBody), "Rest 接口返回结果异常");
            }

            /**
             * 成功 callback
             */
            if (null != successCallback) {
                successCallback.accept(responseBody);
            }

        } catch (Exception e) {



        }
        finally {
            if (Objects.nonNull(response)) {
                try {
                    response.close();
                }
                catch (Exception ignored) {

                }
            }

        }

        log.trace("RestHelper end.");


    }


    /**
     * 构造 request
     */
    public static Request requestBuilder(String url, RequestMethod method, Serializable body, String token) throws FormatException {
        Request.Builder builder = new Request.Builder().url(url);

        switch (method) {
            case GET: builder.get(); break;
            case POST: builder.post(RequestBody.create(MediaType.parse("application/json"), JsonUtils.toJson(body))); break;
            case PUT: builder.put(RequestBody.create(MediaType.parse("application/json"), JsonUtils.toJson(body))); break;
            case DELETE: builder.delete(); break;
        }

        if (StringUtils.hasLength(token)) {
            builder.addHeader("Authorization", token);
        }

        return builder.build();
    }



}
