package com.jansora.app.infrastructure.util;

import com.jansora.app.infrastructure.carrier.dto.KVDto;

import java.util.List;

/**
 * <Description> NumberUtils <br>
 *
 * @author jansora <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @CreateDate 2022/3/20 20:23 <br>
 * @since 1.0 <br>
 */
public class NumberUtils {

    public static List<KVDto<Long>> formatMaxPercent(List<KVDto<Long>> reqs) {
        Long max = reqs.stream().map(KVDto::getValue).max(Long::compareTo).orElse(1L);
        reqs.forEach(req -> req.setValue(req.getValue() * 100 / max));
        return reqs;
    }

    public static List<KVDto<Long>> sortCountDesc(List<KVDto<Long>> reqs) {
        Long max = reqs.stream().map(KVDto::getValue).max(Long::compareTo).orElse(1L);
        reqs.forEach(req -> req.setValue(req.getValue() * 100 / max));
        return reqs;
    }
}
