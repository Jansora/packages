//package com.jansora.repo.mysql.repository;
//
//import com.jansora.app.repo.core.payload.dto.KVDto;
//import com.jansora.app.repo.core.payload.req.SearchReq;
//import com.jansora.app.repo.core.payload.valobj.AuthValObj;
//import com.jansora.app.repo.core.payload.vo.PageVo;
//import com.jansora.app.repo.core.payload.vo.SearchVo;
//import com.jansora.app.repo.core.utils.NumberUtils;
//import com.jansora.app.repo.core.factory.mapper.SearchMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
///**
// * <Description> Description for SearchRepository <br>
// *
// * @author jansora (zhang.yangyuan) <br>
// * @version 1.0 <br>
// * @email zhangyue1936@gmail.com
// * @transId null
// * @CreateDate 2022/8/5 PM03:23 <br>
// * @since 1.0 <br>
// */
//@Repository
//public class SearchRepository {
//
//    @Autowired
//    SearchMapper searchMapper;
//
//
//    /**
//     * 搜索
//     * @param req
//     * @return
//     */
//    public PageVo<SearchVo> search(String tableName, SearchReq req, AuthValObj auth) {
//        PageVo<SearchVo> result = new PageVo<>();
//        result.setData(searchMapper.search(req, tableName, auth));
//        result.setTotal(searchMapper.searchCount(req, tableName, auth));
//        return result;
//    }
//
//    public List<KVDto<Long>> fetchClassifyCounts(String tableName, AuthValObj auth) {
//        return searchMapper.fetchClassifyCounts(tableName, auth);
//    }
//
//    public List<KVDto<Long>> fetchTags(String tableName, String classify, AuthValObj auth) {
//        return NumberUtils.buildCounts(searchMapper.findTagCounts(tableName, classify, auth));
//    }
//
//    public List<KVDto<String>> fetchLogos(String tableName, AuthValObj auth) {
//        return searchMapper.fetchLogos(tableName, auth);
//    }
//
//}
