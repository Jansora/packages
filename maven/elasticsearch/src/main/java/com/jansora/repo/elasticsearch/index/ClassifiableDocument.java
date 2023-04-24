package com.jansora.repo.elasticsearch.index;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Mapping;
import org.springframework.data.elasticsearch.annotations.Setting;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-21 22:23:02
 */

@Data
@NoArgsConstructor
@Setting(settingPath = "elasticsearch/base_settings.json")
@Mapping(mappingPath = "elasticsearch/base_mapping.json")
@Document(indexName = "galaxy_base_index")
public class ClassifiableDocument {

    @Id
    Long id;

    /**
     * 名称
     */
    private String name;

    /**
     * 是否启用
     */
    private Boolean enabled;

    /**
     * 标签
     */
    private String description;

    /**
     * 标签
     */
    private Long userId;

    /**
     * 载荷
     */
    private String payload;

}
