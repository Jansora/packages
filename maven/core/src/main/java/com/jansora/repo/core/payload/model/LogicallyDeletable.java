package com.jansora.repo.core.payload.model;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-08-15 14:09:29
 */
public interface LogicallyDeletable {

    default void markDeleted() {

    }

}
