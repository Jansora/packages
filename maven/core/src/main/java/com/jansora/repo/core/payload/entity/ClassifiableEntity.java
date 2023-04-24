package com.jansora.repo.core.payload.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 10:32:25
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class ClassifiableEntity extends BaseEntity {

    /**
     * 名称
     */
    private String name;

    /**
     * 是否启用
     */
    private Boolean enabled;

    /**
     * 分类
     */
    private String classify;

    /**
     * 标签
     */
    private String tag;

    /**
     * 标签
     */
    private String description;

    /**
     * logo
     */
    private String logo;

    /**
     * 标签
     */
    private Long userId;


}
