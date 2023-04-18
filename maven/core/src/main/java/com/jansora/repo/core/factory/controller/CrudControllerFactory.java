package com.jansora.repo.core.factory.controller;

import com.jansora.repo.core.auth.Auth;
import com.jansora.repo.core.auth.Role;
import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.provider.CrudProviderFactory;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.ety.BaseEty;
import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.req.BaseReq;
import com.jansora.repo.core.payload.vo.BaseVo;
import org.springframework.web.bind.annotation.*;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-24 12:47:57
 */
public interface CrudControllerFactory<ENTITY extends BaseEty, REQUEST extends BaseReq, RESPONSE extends BaseVo, MODEL extends BaseDo> {

    public abstract CrudProviderFactory<ENTITY, REQUEST, RESPONSE, MODEL> crudFactory();

    /**
     * 查询单条数据
     */
    @GetMapping("{id}")
    default ResultDto<RESPONSE> findById(@PathVariable Long id) throws BaseAppException {
        return ResultDto.SUCCESS(crudFactory().findById(id));
    }

    /**
     * 保存
     */
    @PutMapping
    @Auth({Role.ADMIN})
    default ResultDto<RESPONSE> save(@RequestBody REQUEST req) throws BaseAppException {
        return ResultDto.SUCCESS(crudFactory().save(req));
    }

    /**
     * 删除单条数据
     */
    @DeleteMapping("{id}")
    @Auth({Role.ADMIN})
    default ResultDto<RESPONSE> deleteById(@PathVariable Long id) throws BaseAppException {
        return ResultDto.SUCCESS(crudFactory().deleteById(id));
    }

}
