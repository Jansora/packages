package com.jansora.repo.core.factory.feign;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.repository.entity.EntityRequestFactory;
import com.jansora.repo.core.factory.repository.entity.EntityResponseFactory;
import org.springframework.web.bind.annotation.*;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-02-26 18:32:08
 */
public interface CrudFeignFactory<REQUEST extends EntityRequestFactory, RESPONSE extends EntityResponseFactory> extends FeignFactory {

    /**
     * 根据主键查找
     * @param id 主键
     * @return 返回值
     */
    @GetMapping("{id}")
    RESPONSE findById(@PathVariable Long id) throws BaseException;

    /**
     * 保存实体
     * 有实体主键则更新， 没有则保存
     * @param req req
     * @return 实体
     */
    @PostMapping
    RESPONSE save(@RequestBody REQUEST req)  throws BaseException;

    /**
     * 删除实体
     * @param id 主键
     * @return 被删除的实体
     */
    @DeleteMapping("{id}")
    RESPONSE deleteById(@PathVariable Long id) throws BaseException;



}
