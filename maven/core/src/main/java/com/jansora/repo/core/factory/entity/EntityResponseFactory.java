package com.jansora.repo.core.factory.entity;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:28:28
 */
public interface EntityResponseFactory extends EntityFactory {


    String getCreatedAt() ;

    void setCreatedAt(String createdAt);

    String getUpdatedAt();

    void setUpdatedAt(String updatedAt);
}
