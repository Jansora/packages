package com.jansora.repo.cache.config;

import com.jansora.repo.cache.constant.CacheDefine;
import com.jansora.repo.cache.serialize.CustomJacksonRedisSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.util.ReflectionUtils;
import org.springframework.util.StringUtils;

import java.time.Duration;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Configuration
@EnableCaching
@ConditionalOnProperty(prefix = "spring.cache", name = "type", havingValue = "redis")
public class CacheConfiguration implements ApplicationContextAware {

    private static final Logger LOGGER = LoggerFactory.getLogger(CacheConfiguration.class);


    ApplicationContext context;

    @Autowired
    RedisConnectionFactory connectionFactory;

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ALWAYS)
    @Primary
    public CacheManager cacheManager() {
        return buildCacheManager(Duration.ofSeconds(-1L), CacheDefine.CACHE_ALWAYS);
    }


    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_MINUTE)
    public CacheManager cacheManagerOneMinute() {
        return buildCacheManager(Duration.ofMinutes(1), CacheDefine.CACHE_ONE_MINUTE);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_HALF_HOUR)
    public CacheManager cacheManagerHalfHour() {
        return buildCacheManager(Duration.ofMinutes(30), CacheDefine.CACHE_HALF_HOUR);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_HOUR)
    public CacheManager cacheManagerOneHour() {
        return buildCacheManager(Duration.ofHours(1), CacheDefine.CACHE_ONE_HOUR);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_HALF_DAY)
    public CacheManager cacheManagerHalfDay() {
        return buildCacheManager(Duration.ofHours(12), CacheDefine.CACHE_HALF_DAY);
    }


    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_DAY)
    public CacheManager cacheManagerOneDay() {
        return buildCacheManager(Duration.ofDays(1), CacheDefine.CACHE_ONE_DAY);
    }

    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_WEEK)
    public CacheManager cacheManagerOneWeek() {
        return buildCacheManager(Duration.ofDays(7), CacheDefine.CACHE_ONE_WEEK);
    }
    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_MONTH)
    public CacheManager cacheManagerOneMonth() {
        return buildCacheManager(Duration.ofDays(30L), CacheDefine.CACHE_ONE_MONTH);
    }
    /**
     * 缓存管理器
     *
     * */
    @Bean(CacheDefine.CACHE_ONE_YEAR)
    public CacheManager cacheManagerOneYear() {
        return buildCacheManager(Duration.ofDays(365L), CacheDefine.CACHE_ONE_YEAR);
    }
    /**
     * 缓存管理器
     *
     * */
    public RedisCacheManager buildCacheManager(Duration duration, String beanName) {

        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(this.buildTtl(duration)).transactionAware()
                .withInitialCacheConfigurations(buildInitCaches(duration, beanName))
                .build();

    }


    private RedisCacheConfiguration buildTtl(Duration duration) {
        CustomJacksonRedisSerializer<Object> jackson2JsonRedisSerializer = new CustomJacksonRedisSerializer<>(Object.class);
        return RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(duration)
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer));
    }



    private Map<String, RedisCacheConfiguration> buildInitCaches(Duration duration, String cacheManager) {
        HashMap<String, RedisCacheConfiguration> cacheConfigMap = new HashMap<>();

        Arrays.stream(context.getBeanNamesForType(Object.class))
                .map(context::getType)
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

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (Objects.isNull(context)) {
            context = applicationContext;
        }
    }



}
