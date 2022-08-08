package com.jansora.app.repo.core.repository;

import com.jansora.app.repo.core.exception.BaseAppException;
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
public interface CrudRepository<E extends BaseVo, R extends BaseReq> extends BaseRepository {

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    E findById(Long id) throws BaseAppException;

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    E save(R req) throws BaseAppException;

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    E deleteById(Long id) throws BaseAppException;

}
