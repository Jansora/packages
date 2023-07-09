package com.jansora.repo.graphql.autoconfiguration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

/**
 * <Description> Description for MysqlAutoConfiguration <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @CreateDate 2021/11/19 11:50:48 <br>
 * @since 1.0 <br>
 */
@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
@ComponentScan(basePackages = "com.jansora.repo.graphql")
public class GraphqlAutoConfiguration {

}
