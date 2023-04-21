package com.jansora.repo.core.payload.model;

import io.mybatis.provider.Entity;
import lombok.*;

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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity.Table(value = "search", remark = "系统用户", autoResultMap = true)
public class SearchableDo extends BaseDo {

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
     * 标签
     */
    @Entity.Column(value = "user_id", remark = "用户信息")
    private Long userId;
    
}