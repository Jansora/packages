package com.jansora.repo.elasticsearch;

import java.util.List;
import java.util.Map;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-14 20:56:00
 */
public interface Highlight {

    /**
     * 高亮
     * @return
     */
    void highlight(Map<String, List<String>> highlight);
}
