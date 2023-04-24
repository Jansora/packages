package com.jansora.repo.core.payload.response;

import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import lombok.Data;

import java.util.Date;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:50:56
 */
@Data
public class EntityResponse implements EntityResponseFactory {

    private Long id;

    private Date createdAt;

    private Date updatedAt;

}
