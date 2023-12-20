package com.jansora.repo.elasticsearch.index;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Date;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:37:38
 */
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Document(indexName = "galaxy_base_index")
@JsonIgnoreProperties(ignoreUnknown = true)
public abstract class EntityDocument extends BaseDocument {

    @Id
    Long id;

    /**
     * 创建时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    private Date createdAt;

    /**
     * 更新时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

}
