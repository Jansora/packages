package com.jansora.repo.core.payload.response;

import com.jansora.repo.core.payload.request.BaseRequest;
import lombok.*;

import java.util.Date;

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
public class EntityResponse extends BaseRequest {

    /**
     * 唯一标识
     */
    private Long id;

    /**
     * 创建时间
     */
    private Date createdAt;

    /**
     * 更新时间
     */
    private Date updatedAt;

}
