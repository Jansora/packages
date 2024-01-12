package com.jansora.repo.core.factory.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:27:23
 */
@JsonIgnoreProperties(ignoreUnknown = true, value = {"entityFactory"})
public interface EntityFactory {

    Long getId();

    void setId(Long id);

    default boolean exist() {
        return null != getId();
    }
}
