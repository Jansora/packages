package com.jansora.repo.core.payload.response;

import com.jansora.repo.core.payload.Base;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-18 23:14:03
 */
@Data
@Builder
@NoArgsConstructor
//@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class BaseResponse extends Base {

}
