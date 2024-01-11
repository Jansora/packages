package com.jansora.repo.elasticsearch.autoconfiguration;

import org.apache.http.client.config.RequestConfig;
import org.apache.http.impl.nio.client.HttpAsyncClientBuilder;
import org.elasticsearch.client.RestClientBuilder;
import org.springframework.boot.autoconfigure.elasticsearch.RestClientBuilderCustomizer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

import java.time.Duration;

/**
 * <Description> Description for SpringAutoConfiguration <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @CreateDate 2021/11/19 11:50:48 <br>
 * @since 1.0 <br>
 */
@Configuration
@ComponentScan(basePackages = "com.jansora.repo.elasticsearch")
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ElasticsearchAutoConfiguration {

//    @Bean
//    RestClientBuilderCustomizer keepAliveCustomizer() {
//        return new KeepAliveCustomizer();
//    }

    static class KeepAliveCustomizer implements RestClientBuilderCustomizer {
        @Override
        public void customize(RestClientBuilder builder) {

        }

        @Override
        public void customize(HttpAsyncClientBuilder builder) {
            builder.setKeepAliveStrategy((response, context) -> Duration.ofMinutes(5).toMillis());
        }

        @Override
        public void customize(RequestConfig.Builder builder) {
        }
    }

}
