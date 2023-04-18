package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.converter.CrudConverter;
import com.jansora.repo.core.factory.repository.CrudRepositoryFactory;
import com.jansora.repo.core.payload.ety.BaseEty;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.req.BaseReq;
import com.jansora.repo.core.payload.vo.BaseVo;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-26 18:32:08
 */
public interface CrudProviderFactory<ENTITY extends BaseEty, REQUEST extends BaseReq, RESPONSE extends BaseVo, MODEL extends BaseDo> {

    CrudRepositoryFactory<ENTITY, Long> factory();

    CrudConverter<ENTITY, REQUEST, RESPONSE, MODEL> converter();

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default RESPONSE findById(Long id) throws BaseAppException {
        return converter().toResponse(factory().findById(id));
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    default RESPONSE save(REQUEST req) throws BaseAppException {
        return converter().toResponse(factory().save(converter().toEntity(req)));
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default RESPONSE deleteById(Long id) throws BaseAppException {
        return converter().toResponse(factory().deleteById(id));
    }


}
