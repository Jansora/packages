package com.jansora.repo.core.factory.entity;

import java.util.Date;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:28:28
 */
public interface EntityResponseFactory extends Entity {


    Date getCreatedAt() ;

    void setCreatedAt(Date createdAt);

    Date getUpdatedAt();

    void setUpdatedAt(Date updatedAt);
}
