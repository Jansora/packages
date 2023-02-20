import {useEffect, useState} from 'react';
import {client} from "./index";
import {stringify} from 'qs'
import {IsNumber} from "../utils";
import {message} from "antd";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 14:25:13
 */
export const FetchClassifies = () => {


  const [classifies, setClassifies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading) {
      client.get(`notebook/classifies`)
          .then(setClassifies).finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [classifies, loading];
};


export const FetchLogos = () => {


  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading) {
      client.get(`notebook/logos`)
          .then(setLogos).finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [logos, setLogos, loading];
};

export const FetchClassifyCount = () => {


  const [classifyCounts, setClassifyCounts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading) {
      client.get(`notebook/classifyCounts`)
          .then(setClassifyCounts).finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [classifyCounts, setClassifyCounts, loading];
};
export const FetchTags = () => {


  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    if(loading) {
      client.get(`notebook/tags`)
          .then(data => setTags(data))
          .finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [tags, setTags, loading];
};

export const FetchRelationTags = (classify) => {


  const [relationTags, setRelationTags] = useState([]);
  const [relationTagsLoading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true)
  }, [classify])


  useEffect(()=> {

    if (relationTagsLoading) {
      client.get(`notebook/tags?${stringify({classify})}`)
          .then(data => setRelationTags(data))
          .finally(()=> {  setLoading(false)
          })
    }



  }, [relationTagsLoading, classify]);



  return [relationTags, relationTagsLoading];
};

export const InsertNote = (data, callback) => {


  client.post('notebook/note', data)
      .then(response =>  {
          message.success("添加成功")
          callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const UpdateNote = (data, callback) => {
  client.put('notebook/note', data)
      .then(response =>  {
        message.success("更新成功")
        callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};

export const UpdateNoteDraft = (data, callback) => {
  client.post('notebook/note/draft', data)
      .then(response =>  {
        callback && callback(response)
      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const FetchNote = (id, resource) => {


  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {

      client.get(`notebook/note/${id}`)
          .then(setNote).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id]);
  return [note, loading];
};



export const FetchEditableNote = (id, resource) => {

  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {
      client.get(`notebook/note/draft/${id}`)
          .then(setNote).finally(()=> {  setLoading(false)
      })
    }
  }, [loading, id]);
  return [note, loading];
};

export const FetchHistoryNote = (id, resource) => {

  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
  }, [id])
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {
      client.get(`document/version/${id}`)
          .then(setNote).finally(()=> {  setLoading(false)
      })
    }
  }, [loading, id]);
  return [note, loading];
};
export const FetchHistoryNotes = (id, resource) => {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {

      client.get(`notebook/note/versions/${id}`)
          .then(setNotes).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id]);
  return [notes, loading];
};
export const FetchNotes = (classify, tag, title, pageSize, pageNum, orderBy, sort, setPageNum) => {

  const [notes, setNotes] = useState([]);
  const [total, setTotal] = useState([]);
  const [lock, setLock] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setPageNum(1)
    setNotes([])
  },[classify, tag, orderBy, sort, setPageNum])


  useEffect(()=> {
    setLock(false);
  },[classify, tag, pageNum, orderBy, sort])

  useEffect(()=> {
    if (!lock) {
      setLock(true);
      setLoading(true)
      const args = {sort, orderBy, tag, pageSize, pageNum, name: title, classify};
      client.get(`notebook/search?${stringify(args)}`).then(response => {
        setTotal(response.total)
        setNotes(response.data);

        // message.success( `获取文章列表, 当前已展示 ${notes.concat(response.data).length} / ${response.total} 条`)

      }).finally(() => setLoading(false));
    }
  }, [lock, pageNum, notes, tag, title, setLock, sort, orderBy, classify, pageSize]);
  return [notes, setNotes, total, setLock, loading];
};


export const DeleteNote = (id, callback) => {

  client.delete(`notebook/note/${id}`)
      .then(response => {
        callback && callback()
      }).catch(e => {
  }).finally(() => {

  })
  return null;
};


export const FetchNotebooks = () => {

  const [notebooks, setNotebooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading) {
      client.get(`notebook/search`)
           .then(data => setNotebooks(data.sort((a,b) => a.dataIndex - b.dataIndex).map(tag => tag)))
          .finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [notebooks, loading];
};

export const FetchInnerApps = () => {


  const [innerApps, setInnerApps] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading) {
      client.get(`innerApp`)
          .then(data => setInnerApps(data.sort((a,b) => a.dataIndex - b.dataIndex).map(tag => tag)))
          .finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [innerApps, setInnerApps, loading];
};
