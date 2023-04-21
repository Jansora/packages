package com.jansora.repo.core.payload.response;//package com.jansora.repo.core.payload.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <Description> Description for SearchVo <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/5 AM11:26 <br>
 * @since 1.0 <br>
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class SearchResponse extends BaseResponse {

    /**
     * 名称
     */
    protected String name;

    /**
     * 是否启用
     */
    protected Boolean enabled;

    /**
     * 分类
     */
    protected String classify;

    /**
     * 标签
     */
    protected String tag;

    /**
     * 标签
     */
    protected String description;

    /**
     * logo
     */
    protected String logo;

    /**
     * 标签
     */
    protected Long userId;

//    public static <T extends SearchResponse, S extends SearchableDo> void overrideSearch(T target, S source) {
//
//        overrideBase(target, source);
//
//        // 搜索信息
//        target.setName(source.getName());
//        target.setUserId(source.getUserId());
//        target.setClassify(source.getClassify());
//        target.setTag(source.getTag());
//
//        // 搜索表信息
//        target.setEnabled(source.getEnabled());
//        target.setDescription(source.getDescription());
//        target.setLogo(source.getLogo());
//
//    }

}