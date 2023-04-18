package com.jansora.repo.core.payload.dto;

import com.jansora.repo.core.payload.Base;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * <Description> Description for BaseDto <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/1 AM11:58 <br>
 * @since 1.0 <br>
 */
@Data
@Builder
@NoArgsConstructor
//@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class BaseDto extends Base {

}
