package com.jansora.repo.core.payload.response;

import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:50:56
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class EntityResponse extends BaseResponse implements EntityResponseFactory {

    private Long id;

    /**
     * 创建时间
     */
//    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    private String createdAt;

    /**
     * 更新时间
     */
//    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    private String updatedAt;

}
