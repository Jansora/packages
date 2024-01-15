package com.jansora.repo.core.factory.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.jansora.repo.core.payload.entity.BaseEntity;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:27:23
 */
@JsonDeserialize(as = BaseEntity.class)
public interface EntityFactory {

    Long getId();

    void setId(Long id);

    @JsonIgnore
    default boolean exist() {
        return null != getId();
    }
}
