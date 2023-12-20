package com.jansora.repo.elasticsearch.index;

import com.jansora.repo.core.payload.Base;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-15 10:37:38
 */
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Document(indexName = "galaxy_base_index")
public abstract class BaseDocument extends Base {

}
