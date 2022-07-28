package com.jansora.app.infrastructure.carrier.dto;

/**
 * <Description> Description for KVDto <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:33 <br>
 * @since 1.0 <br>
 */
public class KVDto<T> extends BaseDto {
    String name;
    T value;

    public KVDto() {
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public T getValue() {
        return this.value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
