package com.jansora.repo.demo;

import com.jansora.app.repo.core.function.DoSomethingWithThrowable;
import com.jansora.app.repo.core.utils.CostUtils;

/**
 * <Description> Description for AbstractDemoFactory <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/20 AM09:38 <br>
 * @since 1.0 <br>
 */
public abstract class AbstractDemoFactory implements DemoFactory {

    @Override
    public final void run(String[] args) throws Throwable {
        CostUtils.timeWithEx(getModuleName(), doSomething(args));
    }

    protected String getModuleName() {
        return this.getClass().getSimpleName();
    }

    protected abstract DoSomethingWithThrowable doSomething(String[] args) throws Throwable;

}
