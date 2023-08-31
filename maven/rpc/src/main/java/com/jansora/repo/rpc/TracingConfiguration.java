package com.jansora.repo.rpc;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-08-31 14:00:36
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "tracing")
public class TracingConfiguration {

    /**
     * 启用
     */
    boolean enabled;


    /**
     * 采样 url
     */
    String url;
}
