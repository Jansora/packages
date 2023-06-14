package com.jansora.repo.elasticsearch.index;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jansora.repo.core.payload.Base;
import com.jansora.repo.elasticsearch.IndexName;
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
@Document(indexName = ClassifiableDocument.indexName)
@JsonIgnoreProperties(ignoreUnknown = true)

public class ClassifiableDocument extends Base implements IndexName {

    public static final String indexName = "galaxy_base_index";

    @Override
    public String indexName() {
        return indexName;
    }

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
