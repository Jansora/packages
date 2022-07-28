package com.jansora.app.repo.core.carrier.valobj;


import com.jansora.app.repo.core.utils.JsonUtils;

import java.io.Serializable;

/**
 * <Description> Description for AuthValObj <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:32 <br>
 * @since 1.0 <br>
 */
public record AuthValObj(Long authId, String authToken) implements Serializable {

    @Override
    public String toString() {
        return JsonUtils.toJsonIgnoreError(this);
    }

}
