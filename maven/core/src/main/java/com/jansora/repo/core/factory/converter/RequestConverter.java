package com.jansora.repo.core.factory.converter;

import com.jansora.repo.core.payload.model.BaseDo;
import com.jansora.repo.core.payload.req.BaseReq;
import com.jansora.repo.core.payload.vo.BaseVo;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-03-29 12:51:45
 */
public interface RequestConverter<REQUEST extends BaseReq, RESPONSE extends BaseVo, MODEL extends BaseDo> {

}
