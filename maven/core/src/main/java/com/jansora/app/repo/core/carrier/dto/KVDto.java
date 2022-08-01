package com.jansora.app.repo.core.carrier.dto;

/**
 * <Description> Description for KVDto <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/1 PM12:00 <br>
 * @since 1.0 <br>
 */
public class KVDto<T> extends BaseDto {

    String name;

    T value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
