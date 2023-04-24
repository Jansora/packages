package com.jansora.repo.core.payload.request;

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
public class ClassifiableRequest extends PageRequest {

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

}
