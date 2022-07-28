package com.jansora.app.repo.core.utils;

import com.jansora.app.repo.core.function.DoSomething;
import com.jansora.app.repo.core.function.DoSomethingWithThrowable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Objects;

/**
 * <Description> Description for Cost <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/12 PM02:32 <br>
 * @since 1.0 <br>
 */
public final class CostUtils {

    private static final Logger LOGGER = LoggerFactory.getLogger(CostUtils.class);
    private static final String COST_PREFIX = "[ --- COST --- ] ";

    private CostUtils() {

    }

    /**
     * 计时器
     */
    public static void timeWithEx(String moduleName, DoSomethingWithThrowable doSomething) throws Throwable {
        if (LOGGER.isDebugEnabled()) {
            String name = Objects.nonNull(moduleName) ? moduleName : "default-" + DateUtils.formatNow();
            LOGGER.debug(COST_PREFIX + moduleName + " cost start ");
            long start = System.nanoTime();
            doSomething.doSomething();
            float cost = (float) (System.nanoTime() - start) / 1000_000;
            LOGGER.debug(COST_PREFIX + name + " cost end. " + "[ cost: " + cost + " ms. ] ");
            return;
        }

        doSomething.doSomething();

    }

    /**
     * 计时器
     */
    public static void timeWithEx(DoSomethingWithThrowable doSomething) throws Throwable {
        if (LOGGER.isDebugEnabled()) {
            String moduleName = "default-" + DateUtils.formatNow();
            timeWithEx(moduleName, doSomething);
            return;
        }
        doSomething.doSomething();
    }


    /**
     * 计时器
     */
    public static void time(String moduleName, DoSomething doSomething) {
        if (LOGGER.isDebugEnabled()) {
            String name = Objects.nonNull(moduleName) ? moduleName : "default-" + DateUtils.formatNow();
            LOGGER.debug(COST_PREFIX + moduleName + " cost start ");
            long start = System.nanoTime();
            doSomething.doSomething();
            float cost = (float) (System.nanoTime() - start) / 1000_000;
            LOGGER.debug(COST_PREFIX + name + " cost end. " + "[ cost: " + cost + " ms. ] ");
            return;
        }

        doSomething.doSomething();

    }

    /**
     * 计时器
     */
    public static void time(DoSomething doSomething) {
        if (LOGGER.isDebugEnabled()) {
            String moduleName = "default-" + DateUtils.formatNow();
            time(moduleName, doSomething);
            return;
        }
        doSomething.doSomething();
    }


}
