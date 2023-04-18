package com.jansora.repo.core.payload.request;

import lombok.*;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-18 23:31:09
 */



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class EntityRequest extends BaseRequest {

    /**
     * 主键 id
     */
    Long id;

}
