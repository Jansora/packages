package com.jansora.repo.core.payload.entity;

import io.mybatis.provider.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 10:32:25
 */
@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
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
     * 创建人
     */
    private Long userId;

    /**
     * 载荷信息
     */
    @Entity.Column(value = "payload", remark = "载荷信息")
    private String payload;

}
