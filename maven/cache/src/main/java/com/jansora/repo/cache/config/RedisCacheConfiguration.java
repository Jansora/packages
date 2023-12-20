package com.jansora.repo.cache.config;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;

import java.time.Duration;
import java.util.Objects;

@Configuration
@EnableCaching
@ConditionalOnProperty(prefix = "spring.cache", name = "type", havingValue = "redis")
public class RedisCacheConfiguration implements ApplicationContextAware, CacheConfigure {

    ApplicationContext context;

    @Autowired
    RedisConnectionFactory connectionFactory;


    @Override
    public ApplicationContext context() {
        return context;
    }

    @Override
    public CacheManager configure(Duration duration, String beanName) {
        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(this.buildTtl(duration)).transactionAware()
                .withInitialCacheConfigurations(buildInitCaches(duration, beanName))
                .build();
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (Objects.isNull(context)) {
            context = applicationContext;
        }
    }



}
