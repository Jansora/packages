package com.jansora.repo.core.factory.provider;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.domain.CrudDomainFactory;
import com.jansora.repo.core.factory.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.entity.EntityResponseFactory;
import org.springframework.web.bind.annotation.*;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-26 18:32:08
 */
public interface CrudProviderFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory> extends FeignClientProviderFactory {

    CrudDomainFactory<REQUEST, RESPONSE> crudDomainFactory();

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    @GetMapping("{id}")
    default RESPONSE findById(@PathVariable Long id) throws BaseException {
        return crudDomainFactory().findById(id);
    }

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    @PostMapping
    default RESPONSE save(@RequestBody REQUEST req)  throws BaseException {
        return crudDomainFactory().save(req);
    }

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    @DeleteMapping("{id}")
    default RESPONSE deleteById(@PathVariable Long id) throws BaseException  {
        return crudDomainFactory().deleteById(id);
    }



}
