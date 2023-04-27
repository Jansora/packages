package com.jansora.repo.core.payload.response;

import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:50:56
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class EntityResponse extends BaseResponse implements EntityResponseFactory {

    private Long id;

    private Date createdAt;

    private Date updatedAt;

}
