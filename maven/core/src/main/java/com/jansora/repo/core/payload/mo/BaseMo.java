package com.jansora.repo.core.payload.mo;

import com.jansora.repo.core.payload.Base;
import com.jansora.repo.core.utils.DateUtils;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/16 AM10:18 <br>
 * @since 1.0 <br>
 */
public abstract class BaseMo extends Base {

    private String timestamp;

    public BaseMo() {
        this.timestamp = DateUtils.formatNowTimestamp();
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
