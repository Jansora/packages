package com.jansora.repo.core.factory.page;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 17:00:42
 */
public interface PageableFactory {

    int getPageSize();

    void setPageSize(int pageSize);

    int getPageNum();

    void setPageNum(int pageNum);

}
