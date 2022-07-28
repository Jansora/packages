package com.jansora.app.repo.core.repository;

import com.jansora.app.infrastructure.entity.BaseEntity;
import com.jansora.app.repo.core.exception.dao.DataNotFoundException;
import com.jansora.app.repo.core.exception.dao.DataOperationException;
import com.jansora.app.repo.core.exception.web.InvalidArgumentException;

/**
 * <Description> Description for BaseRepository <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @transId null
 * @CreateDate 2021/11/17 12:18:53 <br>
 * @see com.jansora.app.infrastructure.repository <br>
 * @since 1.0 <br>
 */
public interface BaseRepository<E extends BaseEntity, R extends BaseEntity> {

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req 实体
     * @return 实体
     */
    E save(R req) throws InvalidArgumentException, DataNotFoundException, DataOperationException;

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    E delete(Long id) throws DataNotFoundException;

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    E findById(Long id) throws DataNotFoundException, InvalidArgumentException;

}
