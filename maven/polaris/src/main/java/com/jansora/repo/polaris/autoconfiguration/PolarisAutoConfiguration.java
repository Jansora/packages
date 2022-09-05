package com.jansora.repo.polaris.autoconfiguration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

/**
 * <Description> Description for PolarisAutoConfiguration <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @CreateDate 2021/11/19 11:50:48 <br>
 * @since 1.0 <br>
 */
@Configuration
@ComponentScan(basePackages = "com.jansora.repo.polaris")
@Order(Ordered.HIGHEST_PRECEDENCE)
public class PolarisAutoConfiguration {
}
