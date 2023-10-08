package com.jansora.repo.core.utils;


import okhttp3.OkHttpClient;

import javax.net.ssl.*;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.concurrent.TimeUnit;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-10-07 11:06:50
 */
public enum OkHttpClientHelper {
    INSTANCE;

    private OkHttpClient client = null;

    private OkHttpClientHelper() {
        X509TrustManager xtm = new X509TrustManager() {
            public void checkClientTrusted(X509Certificate[] chain, String authType) {
            }

            public void checkServerTrusted(X509Certificate[] chain, String authType) {
            }

            public X509Certificate[] getAcceptedIssuers() {
                return new X509Certificate[0];
            }
        };

        try {
            SSLContext sslContext = SSLContext.getInstance("SSL");
            sslContext.init((KeyManager[])null, new TrustManager[]{xtm}, new SecureRandom());
            HostnameVerifier doNotVerify = OkHttpClientHelper::verify;
            this.client = (new OkHttpClient.Builder()).sslSocketFactory(sslContext.getSocketFactory(), xtm).hostnameVerifier(doNotVerify).connectTimeout(60L, TimeUnit.SECONDS).readTimeout(60L, TimeUnit.SECONDS).build();
        } catch (KeyManagementException | NoSuchAlgorithmException var6) {
            var6.printStackTrace();
        }

    }

    private static boolean verify(String hostname, SSLSession session) {
        return true;
    }

    public OkHttpClient getClient() {
        return this.client;
    }
}
