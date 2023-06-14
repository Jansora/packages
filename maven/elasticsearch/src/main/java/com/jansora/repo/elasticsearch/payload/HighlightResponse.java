package com.jansora.repo.elasticsearch.payload;

import com.jansora.repo.core.payload.Base;
import com.jansora.repo.elasticsearch.Highlight;
import com.jansora.repo.elasticsearch.index.ClassifiableDocument;
import lombok.*;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-06-14 21:19:49
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HighlightResponse extends Base implements Highlight {

    public HighlightResponse(ClassifiableDocument document) {
        Assert.notNull(document, "document is null");
        this.id = document.getId();
        this.name = document.getName();
        this.payload = document.getPayload();
    }

    /**
     * 主键 id
     */
    Long id;


    /**
     * 名称
     */
    String name;


    /**
     * 名称
     */
    List<String> nameHighlight;

    /**
     * 载荷
     */
    String payload;

    /**
     * 载荷
     */
    List<String> payloadHighlight;


    /**
     * 高亮
     *
     * @param text
     * @return
     */
    @Override
    public void highlight(Map<String, List<String>> highlight) {

        this.nameHighlight = highlight.getOrDefault("name", new ArrayList<>());
        this.payloadHighlight = highlight.getOrDefault("payload", new ArrayList<>());

    }

}
