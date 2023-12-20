package com.jansora.repo.rocketmq.autoconfiguration;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

/**
 * <Description> Description for RocketMQAutoConfiguration <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @CreateDate 2021/11/19 11:50:48 <br>
 * @since 1.0 <br>
 */
@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
@ComponentScan(basePackages = "com.jansora.repo.rocketmq")
@ConditionalOnProperty(
        prefix = "rocketmq",
        value = {"name-server"},
        matchIfMissing = true
)
@Import({org.apache.rocketmq.spring.autoconfigure.RocketMQAutoConfiguration.class})
public class RocketMQAutoConfiguration {

}
