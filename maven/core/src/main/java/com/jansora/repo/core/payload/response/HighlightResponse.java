package com.jansora.repo.core.payload.response;

import com.jansora.repo.core.payload.Base;
import lombok.*;

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
public class HighlightResponse extends Base {

    public HighlightResponse(Long id, String name, String payload) {
        this.id = id;
        this.name = name;
        this.payload = payload;
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
     * @return
     */
//    @Override
    public void highlight(Map<String, List<String>> highlight) {

        this.nameHighlight = highlight.getOrDefault("name", new ArrayList<>());
        this.payloadHighlight = highlight.getOrDefault("payload", new ArrayList<>());

    }

}
