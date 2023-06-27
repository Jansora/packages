package com.jansora.repo.core.payload.request;

import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-18 23:16:08
 */
@Data
//@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class ClassifiableRequest extends PageRequest implements EntityRequestFactory {

    /**
     * 主键 id
     */
    private Long id;


    /**
     * 是否启用
     */
    private Boolean enabled;


    /**
     * 标签
     */
    private String description;

    /**
     * logo
     */
    private String logo;

    /**
     * 名称
     */
    private String name;

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

    private Long userId;


    /**
     * 载荷
     */
    protected String payload;
}
