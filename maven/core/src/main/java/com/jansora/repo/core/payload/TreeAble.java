package com.jansora.repo.core.payload;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-08-13 22:13:28
 */
public interface TreeAble<T extends TreeAble<T, ID>, ID> {
    /**
     * 获取 id
     */
    ID getId();

    /**
     * 获取 parent id
     */
    ID getParentId();

    List<T> getChildren();

    void setChildren(List<T> children);


}
