package com.jansora.repo.core.payload.request;

import com.jansora.repo.core.factory.page.PageableFactory;
import com.jansora.repo.core.factory.page.SortableFactory;
import lombok.Data;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-18 23:26:14
 */

@Data
public class PageRequest implements PageableFactory, SortableFactory {

    /**
     * 每页大小 <br>
     */
    private int pageSize;

    /**
     * 当前页数, 从 1 开始 <br>
     */
    private int pageNum;

    /**
     * 排序方式 ASC / DESC <br>
     */
    private String sort;

    /**
     * 排序字段 <br>
     */
    private String orderBy;

}
