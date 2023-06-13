package com.jansora.repo.core.factory.controller;

import com.jansora.repo.core.exception.BaseException;
import com.jansora.repo.core.factory.provider.ClassifiableProviderFactory;
import com.jansora.repo.core.payload.dto.ResultDto;
import com.jansora.repo.core.payload.response.PropertyResponse;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * <Description>  <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/10 PM02:16 <br>
 * @since 1.0 <br>
 */
public interface ClassifiableControllerFactory extends ClassifiableProviderFactory {
    
    abstract ClassifiableProviderFactory searchFactory();

    /**
     * 查询 分类列表
     * @return Optional<EasyCodeDto>
     */
    @GetMapping("classifies")
    default ResultDto<List<PropertyResponse>> fetchClassifies() throws BaseException {
        return searchFactory().fetchClassifies();
    }

}
