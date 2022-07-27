package com.jansora.app.infrastructure.req;

import java.io.Serializable;

/**
 * <Description> BaseNameReq <br>
 *
 * @author jansora <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @CreateDate 2022/3/19 13:01 <br>
 * @since 1.0 <br>
 */
public class BaseNameReq implements Serializable {

    private Long id;

    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
