package com.jansora.repo.core.payload.request;

import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-18 23:32:43
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class ClassifiableEntityRequest extends ClassifiableRequest implements EntityRequestFactory {

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



}
