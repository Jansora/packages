package com.jansora.repo.core.factory.repository;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.exception.system.NotImplementException;
import com.jansora.repo.core.factory.entity.Entity;

/**
 * <Description> Description for CrudRepository <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/28 AM09:41 <br>
 * @since 1.0 <br>
 */
public interface CrudRepositoryFactory<ENTITY extends Entity, ID> {

    /**
     * 可读性
     * @param id 主键
     */
    default boolean readable(ID id) throws BaseAppException {
        return true;
    }

    /**
     * 可编辑性
     * @param id 主键
     */
    default boolean editable(ID id) throws BaseAppException {
        return true;
    }


    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default ENTITY findById(ID id) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param entity entity
     * @return 实体
     */
    default ENTITY save(ENTITY entity) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default ENTITY deleteById(ID id) throws BaseAppException {
        throw new NotImplementException();
    }

}

