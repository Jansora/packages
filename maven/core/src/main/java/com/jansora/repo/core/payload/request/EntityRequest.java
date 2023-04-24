package com.jansora.repo.core.payload.request;

import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import lombok.Data;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:51:27
 */
@Data
public class EntityRequest implements EntityRequestFactory {

    /**
     * 主键
     */
    Long id;

}
