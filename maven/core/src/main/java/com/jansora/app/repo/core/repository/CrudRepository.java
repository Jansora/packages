package com.jansora.app.repo.core.repository;

import com.jansora.app.repo.core.carrier.req.BaseReq;
import com.jansora.app.repo.core.carrier.vo.BaseVo;
import com.jansora.app.repo.core.exception.dao.DataLogicErrorException;
import com.jansora.app.repo.core.exception.dao.DataNotFoundException;
import com.jansora.app.repo.core.exception.dao.DataOperationException;
import com.jansora.app.repo.core.exception.web.InvalidArgumentException;

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
public interface CrudRepository<E extends BaseVo, R extends BaseReq> {

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
