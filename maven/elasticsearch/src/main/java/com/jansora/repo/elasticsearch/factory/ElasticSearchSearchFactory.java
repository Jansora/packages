package com.jansora.repo.elasticsearch.factory;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch._types.query_dsl.MatchQuery;
import co.elastic.clients.elasticsearch.core.SearchRequest;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.HighlightField;
import co.elastic.clients.elasticsearch.core.search.Hit;
import co.elastic.clients.util.ObjectBuilder;
import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.auth.Role;
import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.repository.AdvancedSearchRepositoryFactory;
import com.jansora.repo.core.payload.request.SearchableRequest;
import com.jansora.repo.core.payload.response.HighlightResponse;
import com.jansora.repo.core.payload.response.PageResponse;
import com.jansora.repo.elasticsearch.IndexName;
import com.jansora.repo.elasticsearch.index.ClassifiableDocument;
import org.springframework.data.elasticsearch.annotations.Document;

import java.io.IOException;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.function.Function;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-05-25 09:04:06
 */
public interface ElasticSearchSearchFactory<T extends ClassifiableDocument & IndexName> extends AdvancedSearchRepositoryFactory {

    /**
     * 通过反射获取文件类型
     */
    default Class<T> documentClazz() {
        for (Type type: this.getClass().getGenericInterfaces()) {
            if (type instanceof ParameterizedType parameterizedType
                    && parameterizedType.getRawType() instanceof Class<?> clazz
                    && clazz.getName().equals(ElasticSearchSearchFactory.class.getName())) {
                return (Class<T>) parameterizedType.getActualTypeArguments()[0];
            }
        }
        throw new BaseException("实体类未包含 ES 索引, 请校验").toRuntimeException();
    }


    /**
     * 通过反射获取 index 名称
     */
    default String indexName() {

        Class<T> documentClazz = this.documentClazz();
        Document document = documentClazz.getAnnotation(Document.class);
        if (document == null) {
            throw new BaseException("实体类未包含 ES 索引, 请校验").toRuntimeException();
        }
        return document.indexName();
    }

    ElasticsearchClient client();



    /**
     * 高级搜索
     */
    default PageResponse<HighlightResponse> advancedSearch(String keywords) {
        //        this.flush();
        SearchableRequest request = new SearchableRequest();
        request.setKeywords(keywords);
        request.setPageNum(0);
        request.setPageSize(10);
        return advancedSearch(request);
    }


    /**
     * 高级搜索
     */
    default PageResponse<HighlightResponse> advancedSearch(SearchableRequest request) {

        return this.advancedSearch(s -> s
                .index(this.indexName())
                .query(q -> {
                            // 非 Admin 权限只能看到公开的
                            if (!Role.ADMIN.equals(AuthContext.auth().getRole())) {
                                q.bool(b ->
                                        b.must(MatchQuery.of(m -> m.field("enabled").query(true))._toQuery()));
                            }
                            return q;
                        }
                )
                .query(q ->
                        q.bool(b ->
                                b.must(MatchQuery.of(m -> m
                                        .field("name").query(request.getKeywords())
                                        .field("payload").query(request.getKeywords()))._toQuery()
                                )
                        )
                )
                .highlight(co.elastic.clients.elasticsearch.core.search.Highlight.of(f -> f.fields("payload", HighlightField.of(
                                field -> field.matchedFields(request.getKeywords())))
                        .numberOfFragments(10)
                        .preTags("<em>").postTags("</em>"))
                )
                .from(request.getPageNum() * request.getPageSize())
                .size(request.getPageSize()));
    }



    /**
     * 高级搜索
     */
    default PageResponse<HighlightResponse> advancedSearch(Function<SearchRequest.Builder, ObjectBuilder<SearchRequest>> fn) {

        // Create the low-level client
        try {

            SearchResponse<T> response = client().search(fn, this.documentClazz());

            for (Hit<T> hit : response.hits().hits()) {
                System.out.println("hit:" + hit);
            }

            List<HighlightResponse> documents = response.hits().hits().stream().map(hit -> {
                HighlightResponse document = new HighlightResponse(hit.source().getId(), hit.source().getName(), hit.source().getPayload());
                document.highlight(hit.highlight());
                return document;
            }).toList();

            return PageResponse.build(documents, response.hits().total().value());
        }
        catch (IOException e) {
            throw new BaseException(e).toRuntimeException();
        }
    }




}
