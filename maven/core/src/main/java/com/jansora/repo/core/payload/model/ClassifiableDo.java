package com.jansora.repo.core.payload.model;

import com.jansora.repo.core.payload.Enable;
import io.mybatis.provider.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <Description> Description for SearchableDo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/5 AM11:18 <br>
 * @since 1.0 <br>
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Entity.Table(value = "classify", remark = "系统用户", autoResultMap = true)
public abstract class ClassifiableDo extends BaseDo implements Enable {

    /**
     * 名称
     */
    @Entity.Column(value = "name", remark = "名称")
    private String name;

    /**
     * 是否启用
     */
    @Entity.Column(value = "enabled", remark = "启用")
    private Boolean enabled;

    /**
     * 分类
     */
    @Entity.Column(value = "classify", remark = "分类")
    private String classify;

    /**
     * 标签
     */
    @Entity.Column(value = "tag", remark = "标签")
    private String tag;

    /**
     * 标签
     */
    @Entity.Column(value = "description", remark = "描述")
    private String description;

    /**
     * logo
     */
    @Entity.Column(value = "logo", remark = "logo")
    private String logo;

    /**
     * 创建人
     */
    @Entity.Column(value = "user_id", remark = "用户信息")
    private Long userId;

    /**
     * 载荷信息
     */
    @Entity.Column(value = "payload", remark = "载荷信息")
    private String payload;

}
