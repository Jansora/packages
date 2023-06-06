package com.jansora.repo.elasticsearch.factory;

import com.jansora.repo.core.auth.Role;
import com.jansora.repo.core.context.AuthContext;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.request.PageRequest;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.valobj.AuthValueObject;
import com.jansora.repo.elasticsearch.index.ClassifiableDocument;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;

import java.util.ArrayList;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-05-25 09:04:06
 */
public interface AdvancedSearchFactory<T extends ClassifiableDocument, ID, ENTITY extends BaseEntity> {

    Class<T> documentType();

    ElasticsearchRestTemplate template();


    default PageResponse<T> advancedSearch(SearchableRequest request, PageRequest page) {

        BoolQueryBuilder query = QueryBuilders.boolQuery();
        BoolQueryBuilder subQuery = QueryBuilders.boolQuery();

        AuthValueObject auth = AuthContext.auth();
        if (!Role.ADMIN.equals(auth.getRole())) {
            query.must(QueryBuilders.matchQuery("enabled", true));
        }

        query.must(
                subQuery.should(QueryBuilders.matchQuery("name", request.getKeywords()))
                        .should(QueryBuilders.matchQuery("payload", request.getKeywords()))
        );


        NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
        queryBuilder.withQuery(query).withPageable(org.springframework.data.domain.PageRequest.of(page.getPageNum(), page.getPageSize()));

        // Add highlight
        HighlightBuilder.Field highlightField = new HighlightBuilder.Field("payload");
        highlightField.preTags("<em>").postTags("</em>");
        queryBuilder.withHighlightFields(highlightField);

        return doAdvancedSearch(queryBuilder, documentType());
    }

    default PageResponse<T> doAdvancedSearch(NativeSearchQueryBuilder builder, Class<T> clazz) {

        SearchHits<T> searchHits = template().search(builder.build(), clazz);
        long total = template().count(builder.build(), clazz);
        return PageResponse.build(new ArrayList<>(), total);
    }


}
