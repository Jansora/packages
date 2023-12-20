package com.jansora.repo.cache.config;

import com.jansora.repo.cache.serialize.CustomJacksonRedisSerializer;
import com.jansora.repo.core.constants.CacheDefine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.util.ReflectionUtils;
import org.springframework.util.StringUtils;

import java.time.Duration;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-07-09 15:35:00
 */
public interface CacheConfigure {
    static final Logger LOGGER = LoggerFactory.getLogger(CacheConfigure.class);

    ApplicationContext context();

    CacheManager configure(Duration duration, String beanName);



    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ALWAYS)
    @Primary
    public default CacheManager cacheManager() {
        return configure(Duration.ofDays(100 * 365), CacheDefine.CACHE_ALWAYS);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_FIVE_SECONDS)
    public default CacheManager cacheManagerFiveSeconds() {
        return configure(Duration.ofSeconds(5), CacheDefine.CACHE_FIVE_SECONDS);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_MINUTE)
    public default CacheManager cacheManagerOneMinute() {
        return configure(Duration.ofMinutes(1), CacheDefine.CACHE_ONE_MINUTE);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_HALF_HOUR)
    public default CacheManager cacheManagerHalfHour() {
        return configure(Duration.ofMinutes(30), CacheDefine.CACHE_HALF_HOUR);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_HOUR)
    public default CacheManager cacheManagerOneHour() {
        return configure(Duration.ofHours(1), CacheDefine.CACHE_ONE_HOUR);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_HALF_DAY)
    public default CacheManager cacheManagerHalfDay() {
        return configure(Duration.ofHours(12), CacheDefine.CACHE_HALF_DAY);
    }


    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_DAY)
    public default CacheManager cacheManagerOneDay() {
        return configure(Duration.ofDays(1), CacheDefine.CACHE_ONE_DAY);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_WEEK)
    public default CacheManager cacheManagerOneWeek() {
        return configure(Duration.ofDays(7), CacheDefine.CACHE_ONE_WEEK);
    }
    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_MONTH)
    public default CacheManager cacheManagerOneMonth() {
        return configure(Duration.ofDays(30L), CacheDefine.CACHE_ONE_MONTH);
    }
    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_YEAR)
    public default CacheManager cacheManagerOneYear() {
        return configure(Duration.ofDays(365L), CacheDefine.CACHE_ONE_YEAR);
    }
    
    default org.springframework.data.redis.cache.RedisCacheConfiguration buildTtl(Duration duration) {
        CustomJacksonRedisSerializer<Object> jackson2JsonRedisSerializer = new CustomJacksonRedisSerializer<>(Object.class);
        return org.springframework.data.redis.cache.RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(duration)
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer));
    }



    default Map<String, RedisCacheConfiguration> buildInitCaches(Duration duration, String cacheManager) {
        HashMap<String, RedisCacheConfiguration> cacheConfigMap = new HashMap<>();

        Arrays.stream(context().getBeanNamesForType(Object.class))
                .map(context()::getType)
                .filter(Objects::nonNull)
                .filter(clazz -> {
                    return Objects.nonNull(AnnotationUtils.findAnnotation(clazz, org.springframework.cache.annotation.CacheConfig.class));
                })
                .forEach(clazz -> {
                            ReflectionUtils.doWithMethods(clazz, method -> {
//                                ReflectionUtils.makeAccessible(method);
                                if (!method.trySetAccessible()) {

                                    LOGGER.debug("buildInitCaches binding method failed. method: {}", method);
                                    return;
                                }
                                Cacheable cacheable = AnnotationUtils.findAnnotation(method, Cacheable.class);
                                if (Objects.nonNull(cacheable)) {
                                    for (String cache : cacheable.cacheNames()) {
                                        RedisSerializationContext.SerializationPair<Object> sp = RedisSerializationContext.SerializationPair
                                                .fromSerializer(new CustomJacksonRedisSerializer<>(method.getGenericReturnType()));

                                        // 优先去方法上的值
                                        if (cacheManager.equals(cacheable.cacheManager())) {
                                            cacheConfigMap.put(cache, buildTtl(duration).serializeValuesWith(sp));
                                        }
                                        // 没有指定的话, 取类上的默认值
                                        else if (StringUtils.isEmpty(cacheable.cacheManager())) {
                                            Cacheable clazzCacheable = AnnotationUtils.findAnnotation(method, Cacheable.class);

                                            // 类上也没有指定的话, 取 -1
                                            if (Objects.isNull(clazzCacheable) || StringUtils.isEmpty(clazzCacheable.cacheManager())) {
                                                cacheConfigMap.put(cache, buildTtl(Duration.ofSeconds(-1)).serializeValuesWith(sp));
                                            }
                                            else if (cacheManager.equals(clazzCacheable.cacheManager())) {
                                                cacheConfigMap.put(cache, buildTtl(duration).serializeValuesWith(sp));
                                            }
                                        }

                                    }
                                }
                            });
                        }
                );
        return cacheConfigMap;
    }
}
