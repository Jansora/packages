package com.jansora.repo.core.factory.provider;

import org.springframework.cloud.openfeign.FeignClient;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-13 14:11:05
 */
@FeignClient(name = "${spring.application.name}")
public interface FeignClientProviderFactory {

}
