package com.jansora.repo.core.payload;

import com.jansora.repo.core.utils.JsonUtils;

import java.io.Serializable;

/**
 * <Description> Description for Base <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/1 AM11:58 <br>
 * @since 1.0 <br>
 */
public abstract class Base implements Serializable {
    @Override
    public String toString() {
        return this.getClass().getTypeName() + ":" + JsonUtils.toJsonIgnoreError(this);
    }
}
