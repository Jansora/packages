package com.jansora.repo.core.factory.controller;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.service.CrudServiceFactory;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.req.BaseReq;
import com.jansora.repo.core.payload.vo.BaseVo;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-24 12:47:57
 */
public interface CrudControllerFactory<RESPONSE extends BaseVo, REQUEST extends BaseReq> {

    public abstract CrudServiceFactory<RESPONSE, REQUEST> factory();

    /**
     * 查询单条数据
     */
    @GetMapping("{id}")
    default ResultDto<RESPONSE> findById(@PathVariable Long id) throws BaseAppException {
        return ResultDto.SUCCESS(factory().findById(id));
    }

    /**
     * 保存
     */
    @PutMapping
    default ResultDto<RESPONSE> save(REQUEST req) throws BaseAppException {
        return ResultDto.SUCCESS(factory().save(req));
    }

    /**
     * 删除单条数据
     */
    @DeleteMapping
    default ResultDto<RESPONSE> deleteById(Long id) throws BaseAppException {
        return ResultDto.SUCCESS(factory().deleteById(id));
    }

}