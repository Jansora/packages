package com.jansora.repo.mysql.payload;

import com.jansora.app.repo.core.payload.dto.BaseDto;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/8 AM10:34 <br>
 * @since 1.0 <br>
 */
public class ConditionSQLDto extends BaseDto {
    // 字段名称
    private String fieldName;
    // 符号
    private String sign;
    // 符号值
    private Object fieldValue;

    public ConditionSQLDto() {

    }

    public ConditionSQLDto(String fieldName, String sign, Object fieldValue) {
        this.fieldName = fieldName;
        this.sign = sign;
        this.fieldValue = fieldValue;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public Object getFieldValue() {
        return fieldValue;
    }

    public void setFieldValue(Object fieldValue) {
        this.fieldValue = fieldValue;
    }
}
