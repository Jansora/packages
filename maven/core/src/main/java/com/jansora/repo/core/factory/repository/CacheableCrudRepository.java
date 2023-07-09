package com.jansora.repo.core.factory.repository;

import com.jansora.repo.core.factory.entity.EntityFactory;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-07-09 17:35:14
 */
public interface CacheableCrudRepository<ENTITY extends EntityFactory, ID> extends CrudRepositoryFactory<ENTITY, ID> {


}
