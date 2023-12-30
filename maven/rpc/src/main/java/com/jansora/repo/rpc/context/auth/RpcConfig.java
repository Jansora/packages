package com.jansora.repo.rpc.context.auth;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.rpc.TracingConfiguration;
import feign.RequestInterceptor;
import io.opentelemetry.exporter.otlp.http.trace.OtlpHttpSpanExporter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static com.jansora.repo.rpc.constants.AuthConstants.ROLE;
import static com.jansora.repo.rpc.constants.AuthConstants.USER_ID;

/**
 * <Description> <br>
 *
 * @author Jansora <br>
 * @version 1.0 <br>
 * @CreateDate 2020/11/20 22:39:39  <br>
 *
 * @since 1.0 <br>
 */
@Configuration
@Slf4j
public class RpcConfig implements WebMvcConfigurer {

    @Autowired
    TracingConfiguration tracingConfiguration;

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public RequestInterceptor requestInterceptor() {
        return requestTemplate -> {
            log.debug("request: {} {} {}", requestTemplate.method(), requestTemplate.feignTarget().url(), AuthContext.auth());
            // 添加上下文信息到请求头
            requestTemplate.header(USER_ID, AuthContext.auth().getAuthId().toString());
            requestTemplate.header(ROLE, AuthContext.auth().getRole().toString());
        };
    }

    @Bean
    @ConditionalOnProperty(prefix = "tracing", name = "enabled", havingValue = "true")
    OtlpHttpSpanExporter otlpHttpSpanExporter() {
        return OtlpHttpSpanExporter.builder()
                .setEndpoint(tracingConfiguration.getUrl())
                .build();
    }

    /*
     * 拦截器配置
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 注册自定义拦截器，添加拦截路径和排除拦截路径
        registry.addInterceptor(new RpcInterceptor()).addPathPatterns("/feign/**");
    }

}
