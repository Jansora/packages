package com.jansora.app.infrastructure.persistence.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Id;
import java.util.Date;

/**
 * <Description> Description for BaseDo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @transId null
 * @CreateDate 2021/12/1 13:30:35 <br>
 * @see com.jansora.app.infrastructure.persistence.model <br>
 * @since 1.0 <br>
 */
public class BaseDo {

    @Id
    private Long id;

    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    private Date createdAt;

    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

}
