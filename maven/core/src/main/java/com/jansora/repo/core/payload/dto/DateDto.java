package com.jansora.repo.core.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * <Description> DateVo <br>
 *
 * @author jansora <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @CreateDate 2022/3/22 18:41 <br>
 * @since 1.0 <br>
 */
@Data
//@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DateDto extends BaseDto {

    Integer year;

    Integer month;

    Integer day;

}
