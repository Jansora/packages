package com.jansora.repo.core.logging.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * <Description> Description for Logging <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/13 PM04:07 <br>
 * @since 1.0 <br>
 */

/*
    日志组件
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Logging {

    /**
     * 打印参数
     * @return 默认为 true
     */
    boolean printArgs() default true;
    /**
     * 打印返回值
     * @return 默认为 true
     */
    boolean printRetVal() default true;


}