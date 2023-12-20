package com.jansora.repo.core.factory.page;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 17:02:41
 */
public interface SortableFactory {

    String getSort();

    void setSort(String sort);

    String getOrderBy();

    void setOrderBy(String orderBy);

}
