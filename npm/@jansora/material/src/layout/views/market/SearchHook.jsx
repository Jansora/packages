import {FetchClassifies, FetchRelationTags, SearchEntity} from "../../../request/entity";
import React, {useEffect, useState} from "react";
import {useDebounceFn, useResponsive} from "ahooks";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const SearchHook = (baseUrl) => {

    const responsive = useResponsive();

    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [classify, setClassify] = useState(null);
    const [classifies, classifiesLoading] = FetchClassifies(baseUrl);
    const [relationTags] = FetchRelationTags(baseUrl, classify);
    const [pageNum, setPageNum] = useState(1);
    const pageSize = responsive.huge ? 24 : (responsive.large ? 18 : (responsive.middle ? 8 : 6));
    const [orderBy, setOrderBy] = useState('updated_at');
    const [sort, setSort] = useState('DESC');

    const [data, setData, total, setLock, loading] = SearchEntity(baseUrl, classify, tag, title, pageSize, pageNum, orderBy, sort, setPageNum);


    useEffect(() => {
        setTag('')
    }, [classify])

    const autoSearch = (value) => {
        setTitle(value)
        setData([]);
        setPageNum(1);
        setLock(false)
    }

    const { run: search } = useDebounceFn(
        autoSearch,
        {
            wait: 1000,
        },
    );


    return {search, orderBy, setOrderBy, sort, setSort, title, setTitle, tag, setTag, classify, setClassify, classifies, classifiesLoading, relationTags, pageNum, setPageNum, pageSize, data, setData, total, setLock, loading}
}

export default SearchHook;