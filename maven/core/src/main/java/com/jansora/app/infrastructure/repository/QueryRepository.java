//package com.jansora.app.infrastructure.repository;
//
//import com.jansora.app.infrastructure.carrier.dto.page.PageResp;
//import com.jansora.app.infrastructure.carrier.entity.BaseEntity;
//import com.jansora.app.infrastructure.exception.dao.DataNotFoundException;
//import com.jansora.app.infrastructure.exception.web.InvalidArgumentException;
//
//public interface QueryRepository<E extends BaseEntity, R extends SearchEntity>  {
//
//    /**
//     * 根据条件查找
//     * @param req 搜索入参
//     * @return 返回值
//     */
//    PageResp<E> findByConditions(R req) throws DataNotFoundException, InvalidArgumentException;
//
//}
