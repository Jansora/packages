package com.jansora.repo.core.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

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
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class KVDto<T> extends BaseDto {

    /**
     * key
     */
    String key;

    /**
     * 值
     */
    T value;

}
