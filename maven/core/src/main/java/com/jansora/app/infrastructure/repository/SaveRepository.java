package com.jansora.app.infrastructure.repository;

import com.jansora.app.infrastructure.entity.BaseEntity;
import com.jansora.app.infrastructure.exception.dao.DataLogicErrorException;
import com.jansora.app.infrastructure.exception.dao.DataNotFoundException;
import com.jansora.app.infrastructure.exception.dao.DataOperationException;
import com.jansora.app.infrastructure.exception.web.InvalidArgumentException;

/**
 * <Description> Description for SaveRepository <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @transId null
 * @CreateDate 2021/11/17 12:18:53 <br>
 * @see com.jansora.app.infrastructure.repository <br>
 * @since 1.0 <br>
 */
public interface SaveRepository<E extends BaseEntity, R extends BaseEntity> {


    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    E findById(Long id) throws DataNotFoundException, InvalidArgumentException;

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    E save(R req) throws DataOperationException, DataNotFoundException, InvalidArgumentException;

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    E deleteById(Long id) throws DataNotFoundException, InvalidArgumentException, DataOperationException, DataLogicErrorException;

}
