package com.jansora.repo.core.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-18 23:32:43
 */
@Data
//@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class SearchableEntityRequest extends EntityRequest {

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
