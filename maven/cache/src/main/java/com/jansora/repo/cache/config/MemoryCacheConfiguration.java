package com.jansora.repo.cache.config;

import com.github.benmanes.caffeine.cache.Caffeine;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;
import java.util.Objects;

@Configuration
@EnableCaching
@ConditionalOnProperty(prefix = "spring.cache", name = "type", havingValue = "caffeine")
@Slf4j
public class MemoryCacheConfiguration implements ApplicationContextAware, CacheConfigure {

    ApplicationContext context;

    @Override
    public ApplicationContext context() {
        return context;
    }

    @Override
    public CacheManager configure(Duration duration, String beanName) {

        CaffeineCacheManager cacheManager = new CaffeineCacheManager();

        cacheManager.setCaffeine(Caffeine.newBuilder()
                .initialCapacity(128)
                .maximumSize(10240)
                .expireAfterWrite(duration));

        return cacheManager;
    }




    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (Objects.isNull(context)) {
            context = applicationContext;
        }
    }



}

