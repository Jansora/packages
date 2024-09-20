package com.jansora.repo.core.factory.crud;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.converter.CrudConverter;
import com.jansora.repo.core.payload.Accessor;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.request.EntityRequest;
import com.jansora.repo.core.payload.response.EntityResponse;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2024-09-06 10:29:57
 */
public interface CrudProviderFactory<REQUEST extends EntityRequest, RESPONSE extends EntityResponse> {

    <ENTITY extends BaseEntity, MODEL extends BaseDo> CrudRepositoryFactory<ENTITY, MODEL> repository();

    <ENTITY extends BaseEntity, MODEL extends BaseDo> CrudConverter<ENTITY, REQUEST, RESPONSE, MODEL> converter();

//    /**
//     * 查找所有
//     */
//    default List<RESPONSE> findAll() throws BaseException {
//        return converter().toResponses(repository().findAll());
//    }

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    default RESPONSE findById(Long id) throws BaseException {
        return converter().toResponse(repository().findById(id));
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    default RESPONSE save(REQUEST req) throws BaseException  {
        BaseEntity entity = converter().toEntity(req);
        if (entity instanceof Accessor accessor) {
            accessor.setUserId(AuthContext.auth().getAuthId());
        }
        return this.findById(repository().save(entity));

    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    default RESPONSE deleteById(Long id) throws BaseException {
        return converter().toResponse(repository().deleteById(id));
    }


}
