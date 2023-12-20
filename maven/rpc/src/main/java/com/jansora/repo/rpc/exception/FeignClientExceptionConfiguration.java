package com.jansora.repo.rpc.exception;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-27 15:24:27
 */
import feign.codec.ErrorDecoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignClientExceptionConfiguration {

    @Bean
    public ErrorDecoder errorDecoder() {
        return new CustomErrorDecoder();
    }
}

