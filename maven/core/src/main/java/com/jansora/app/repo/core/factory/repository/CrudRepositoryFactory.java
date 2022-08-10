package com.jansora.app.repo.core.factory.repository;

import com.jansora.app.repo.core.exception.BaseAppException;
import com.jansora.app.repo.core.exception.system.NotImplementException;
import com.jansora.app.repo.core.payload.req.BaseReq;
import com.jansora.app.repo.core.payload.vo.BaseVo;

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
public interface CrudRepositoryFactory<E extends BaseVo, R extends BaseReq> extends BaseRepositoryFactory {

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default E findById(Long id) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    default E save(R req) throws BaseAppException {
        throw new NotImplementException();
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default E deleteById(Long id) throws BaseAppException {
        throw new NotImplementException();
    }

}
