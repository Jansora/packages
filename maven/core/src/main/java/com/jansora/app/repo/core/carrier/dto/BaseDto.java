package com.jansora.app.repo.core.carrier.dto;

import com.jansora.app.repo.core.utils.JsonUtils;

import java.io.Serializable;

/**
 * <Description> Description for BaseDto <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:33 <br>
 * @since 1.0 <br>
 */
public class BaseDto implements Serializable {

    @Override
    public String toString() {
        return JsonUtils.toJsonIgnoreError(this);
    }
}
