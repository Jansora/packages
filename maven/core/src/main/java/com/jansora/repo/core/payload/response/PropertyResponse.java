package com.jansora.repo.core.payload.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class PropertyResponse extends BaseResponse {


    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String ak;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String av;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String bk;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String bv;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String ck;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String cv;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String dk;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String dv;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String ek;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String ev;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String fk;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String fv;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String gk;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String gv;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String hk;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String hv;


}
