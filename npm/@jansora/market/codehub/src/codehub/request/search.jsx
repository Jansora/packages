import {client} from "./index";
import {stringify} from "qs";
import {useEffect, useState} from "react";

export const FetchClassifies = (baseUrl) => {


    const [classifies, setClassifies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        if(loading) {
            client.get(`${baseUrl}/classifies`)
                .then(setClassifies).finally(()=> {  setLoading(false)
            })
        }

    }, [loading, baseUrl]);



    return [classifies, loading];
};



export const FetchClassifyCount = (baseUrl) => {


    const [classifyCounts, setClassifyCounts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        if(loading) {
            client.get(`${baseUrl}/classifyCounts`)
                .then(setClassifyCounts).finally(()=> {  setLoading(false)
            })
        }

    }, [loading, baseUrl]);



    return [classifyCounts, setClassifyCounts, loading];
};
export const FetchTags = (baseUrl) => {


    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if(loading) {
            client.get(`${baseUrl}/tags`)
                .then(data => setTags(data))
                .finally(()=> {  setLoading(false)
                })
        }

    }, [loading, baseUrl]);



    return [tags, setTags, loading];
};

export const FetchRelationTags = (baseUrl, classify) => {


    const [relationTags, setRelationTags] = useState([]);
    const [relationTagsLoading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true)
    }, [classify])


    useEffect(()=> {

        if (relationTagsLoading) {
            client.get(`${baseUrl}/tags?${stringify({classify})}`)
                .then(data => setRelationTags(data))
                .finally(()=> {  setLoading(false)
                })
        }



    }, [relationTagsLoading, classify, baseUrl]);



    return [relationTags, relationTagsLoading];
};

export const Search = (baseUrl, classify, tag, title, pageSize, pageNum, orderBy, sort, setPageNum) => {

    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);
    const [lock, setLock] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setPageNum(1)
        setData([])
    },[classify, tag, orderBy, sort, setPageNum])


    useEffect(()=> {
        setLock(false);
    },[classify, tag, pageNum, orderBy, sort])

    useEffect(()=> {
        if (!lock) {
            setLock(true);
            setLoading(true)
            const args = {sort, orderBy, tag, pageSize, pageNum, name: title, classify};
            client.get(`${baseUrl}/search?${stringify(args)}`).then(response => {
                setTotal(response.total)
                setData(response.data);

                // message.success( `获取文章列表, 当前已展示 ${notes.concat(response.data).length} / ${response.total} 条`)

            }).finally(() => setLoading(false));
        }
    }, [lock, pageNum, data, tag, title, setLock, sort, orderBy, classify, pageSize, baseUrl]);

    return [data, setData, total, setLock, loading];
};
