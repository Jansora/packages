package com.jansora.repo.mysql.autoconfiguration;

import com.jansora.app.repo.core.generator.CustomBeanNameGenerator;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import tk.mybatis.spring.annotation.MapperScan;

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
@MapperScan(basePackages = "com.jansora.**.mapper", nameGenerator = CustomBeanNameGenerator.class)
public class MysqlAutoConfiguration {
}