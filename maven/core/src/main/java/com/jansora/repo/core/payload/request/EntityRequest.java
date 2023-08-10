package com.jansora.repo.core.payload.request;

import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 16:51:27
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class EntityRequest extends BaseRequest implements EntityRequestFactory {

    /**
     * 主键
     */
    Long id;

}
