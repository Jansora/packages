package com.jansora.repo.core.payload.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jansora.repo.core.payload.Base;
import io.mybatis.provider.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * <Description> Description for BaseDo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/7/29 PM01:50 <br>
 * @since 1.0 <br>
 */
@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity.Table(value = "base", remark = "系统用户", autoResultMap = true)
public abstract class EntityDo extends Base {

    /**
     * 主键 id
     */
    @Entity.Column(id = true, remark = "主键", updatable = false, insertable = false)
    private Long id;

    /**
     * 创建时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    @Entity.Column(value = "created_at", remark = "创建时间")
    private Date createdAt;

    /**
     * 更新时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    @Entity.Column(value = "updated_at", remark = "更新时间")
    private Date updatedAt;
}
