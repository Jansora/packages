package com.jansora.repo.elasticsearch.factory;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch._types.query_dsl.MatchQuery;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Highlight;
import co.elastic.clients.elasticsearch.core.search.HighlightField;
import co.elastic.clients.elasticsearch.core.search.Hit;
import com.jansora.repo.core.auth.Role;
import com.jansora.repo.core.context.AuthContext;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.exception.system.CommandException;
import com.jansora.repo.core.payload.entity.BaseEntity;
import com.jansora.repo.core.payload.request.PageRequest;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.core.payload.valobj.AuthValueObject;
import com.jansora.repo.elasticsearch.index.ClassifiableDocument;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-05-25 09:04:06
 */
public interface AdvancedSearchFactory<T extends ClassifiableDocument, ENTITY extends BaseEntity> {

    Class<T> documentType();

    ElasticsearchClient client();


    default PageResponse<T> advancedSearch(SearchableRequest request, PageRequest page, Class<ENTITY> entityClass) {

        // Create the low-level client
        try {

            SearchResponse<ENTITY> response = client().search(s -> {
                try {
                    return s.index(
                                    this.documentType().getDeclaredConstructor().newInstance().indexName()
                            )
                            .query(q -> {
                                        AuthValueObject auth = AuthContext.auth();
                                        if (!Role.ADMIN.equals(auth.getRole())) {
                                            q.bool(b ->
                                                    b.must(MatchQuery.of(m -> m.field("enabled").query(true))._toQuery()));
                                        }
                                        return q;
                                    }
                            )
                            .query(q ->
                                    q.bool(b ->
                                            b.must(MatchQuery.of(m ->
                                                            m.field("name").query(request.getKeywords())
                                                                    .field("payload").query(request.getKeywords())
                                                    )._toQuery()
                                            )))
                            .highlight(Highlight.of(f -> f.fields("payload", HighlightField.of(
                                            field -> field.matchedFields(request.getKeywords())))
                                    .preTags("<em>").postTags("</em>"))
                            )
                            .from(page.getPageNum() * page.getPageSize())
                            .size(page.getPageSize());
                } catch (InstantiationException | IllegalAccessException | InvocationTargetException |
                         NoSuchMethodException e) {
                    throw new CommandException().toRuntimeException();
                }
            }, entityClass);

            for (Hit<ENTITY> hit : response.hits().hits()) {
                System.out.println("hit:" + hit);
            }

            return PageResponse.build(new ArrayList<>(), 0);
        }
        catch (IOException e) {
            throw new BaseException(e).toRuntimeException();
        }
    }




}
