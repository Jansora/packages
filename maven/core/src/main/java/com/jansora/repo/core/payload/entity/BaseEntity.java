package com.jansora.repo.core.payload.entity;

import com.jansora.repo.core.payload.Base;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <Description> Description for BaseEty <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/2 AM10:35 <br>
 * @since 1.0 <br>
 */

@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public abstract class BaseEntity extends Base {

    /**
     * 唯一标识
     */
    private Long id;
}
