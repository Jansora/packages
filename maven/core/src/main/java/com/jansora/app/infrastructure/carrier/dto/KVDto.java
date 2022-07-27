package com.jansora.app.infrastructure.carrier.dto;

public class KVDto<T> extends BaseDto {

    /**
     * 名称
     */
    String name;

    /**
     * 值
     */
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
