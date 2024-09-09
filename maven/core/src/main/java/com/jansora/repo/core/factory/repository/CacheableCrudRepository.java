package com.jansora.repo.core.factory.repository;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.system.NotImplementException;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-07-09 17:35:14
 */
public interface CacheableCrudRepository {


    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default <ENTITY, ID> ENTITY findById(ID id) throws BaseException {
        throw new NotImplementException();
    }

    /**
     * 查询所有数据
     * @return 返回值
     */
    default <ENTITY> List<ENTITY> findAll() throws BaseException {
        throw new NotImplementException();
    }

    /**
     * 删除实体
     * @return 被删除的实体
     */
    default <ENTITY> void delete(ENTITY entity) {

    }

}
