package com.jansora.repo.core.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * <Description> Description for DatetimeDto <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/3/23 PM12:19 <br>
 * @since 1.0 <br>
 */
@Data
//@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DatetimeDto extends DateDto {

    Integer hour;

    Integer minute;

    Integer second;

}
