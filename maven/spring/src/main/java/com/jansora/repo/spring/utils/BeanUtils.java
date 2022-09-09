package com.jansora.repo.spring.utils;

import com.jansora.repo.core.exception.transform.FormatException;
import com.jansora.repo.core.exception.web.InvalidArgumentException;
import com.jansora.repo.core.utils.AssertUtils;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.function.BiConsumer;

/**
 * <Description> Description for BeanUtils <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/1 PM05:48 <br>
 * @since 1.0 <br>
 */
public final class BeanUtils {
    /*
    Bean Copy
     */
    public static <T, F> List<T> copy(Class<T> tClass, Class<F> sClass, List<F> sources) throws FormatException {

        try {
            List<T> arrs = new ArrayList<>();

            for (F source : sources) {
                T target = tClass.newInstance();
                org.springframework.beans.BeanUtils.copyProperties(source, target);
                arrs.add(target);
            }

            return arrs;

        } catch (InstantiationException | IllegalAccessException e) {
            throw new FormatException(e.getLocalizedMessage());
        }

    }

    /*
    Bean Copy
     */
    public static <T> T copy(Class<T> tClass, Object... sources) throws FormatException, InvalidArgumentException {
        AssertUtils.nonNull(tClass, sources);
        try {
            T target = tClass.newInstance();
            for (Object source : sources) {
                org.springframework.beans.BeanUtils.copyProperties(source, target);
            }
            return target;
        } catch (InstantiationException | IllegalAccessException e) {
            throw new FormatException(e.getLocalizedMessage());
        }

    }

    /*
    Bean Copy
     */
    public static <T> T copyIgnoreNull(Class<T> tClass, Object... sources) throws FormatException {

        try {
            T target = tClass.newInstance();
            for (Object source : sources) {
                if (Objects.nonNull(source)) {
                    org.springframework.beans.BeanUtils.copyProperties(source, target);
                }
            }
            return target;
        }
        catch (InstantiationException | IllegalAccessException e) {
            throw new FormatException(e.getLocalizedMessage());
        }
    }


    /**
     * 覆写字段
     * @param object
     * @param setter
     * @param overrideValue
     * @param <T>
     * @param <V>
     */
    public static <T, V> void override(T object, BiConsumer<T, V> setter, V overrideValue) {
        if (Objects.isNull(overrideValue)) {
            return;
        }

        // 如果是 String. 判断字符串是否为空
        if (overrideValue instanceof String && !StringUtils.hasText((CharSequence) overrideValue)) {
            return;
        }

        // 如果是 数组. 判断数组是否为空
        if (overrideValue.getClass().isArray() && ((Object[]) object).length == 0) {
            return;
        }

        // 如果是集合. 判断集合是否为空
        if (overrideValue instanceof Collection<?> && CollectionUtils.isEmpty((Collection<?>) overrideValue)) {
            return;
        }

        // do override.
        setter.accept(object, overrideValue);


    }


}
