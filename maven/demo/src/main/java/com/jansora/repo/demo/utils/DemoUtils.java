package com.jansora.repo.demo.utils;

import com.jansora.app.repo.core.utils.CostUtils;
import com.jansora.repo.demo.AbstractDemoFactory;

/**
 * <Description> Description for DemoUtils <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 PM07:35 <br>
 * @since 1.0 <br>
 */
public final class DemoUtils {

    @SafeVarargs
    public static <T extends AbstractDemoFactory> void run(String[] args, Class<T>... demos) throws Throwable {
        for (Class<T> demo : demos) {
            CostUtils.timeWithEx(demo.getName(), () -> demo.newInstance().run(args));
        }
    }

}
