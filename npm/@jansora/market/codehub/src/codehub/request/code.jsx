import {useEffect, useState} from 'react';
import {client} from "./index";
import {message} from "antd";
import {stringify} from 'qs'

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
      client.get(`playground/code/classifies`)
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
      client.get(`playground/code/logos`)
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
      client.get(`playground/code/classifyCounts`)
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
      client.get(`playground/code/tags`)
        .then(data => setTags(data.sort((a,b) => b.count - a.count).map(tag => tag)))
        .finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);



  return [tags, setTags, loading];
};

export const FetchRelationTags = (classify) => {


  const [relationTags, setRelationTags] = useState([]);
  const [relationTagsLoading, setLoading] = useState(true);
  useEffect(()=> {

      client.get(`playground/code/tags?${stringify({classify})}`)
          .then(data => setRelationTags(data))
          .finally(()=> {  setLoading(false)
          })


  }, [relationTagsLoading, classify]);




  return [relationTags, relationTagsLoading];
};

export const InsertAction = (data, callback) => {


  client.post('playground/code', data)
      .then(response =>  {
          message.success("添加成功")
          callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const UpdateAction = (data, callback) => {
  client.put('playground/code', data)
      .then(response =>  {
        // message.success("更新成功")
        callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const FetchCode = (id, version) => {


  const [Action, setAction] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    console.log("id", id)
    if(loading && !!id) {
      client.get(`playground/code/${id}?${stringify({version})}`)
          .then(setAction).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id]);


  console.log("Action", Action)
  return [Action, loading];
};

export const FetchGenerateAction = (template, variable) => {

  const [raw, setRaw] = useState("");
  const [loading, setLoading] = useState(false);

  const args = {
    variable: JSON.stringify(variable, null, 2), raw: template,
  }
  useEffect(()=> {
    if(loading) {

      client.put(`playground/code/generate`, args)
        .then(setRaw).finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);

  return [raw, setRaw, loading, setLoading];

};

export const FetchRenderAction = (template, variable) => {

  const [raw, setRaw] = useState({});
  const [loading, setLoading] = useState(true);

  const args = {
    variable: JSON.stringify(variable, null, 2), raw: template,
  }
  useEffect(()=> {
    if(loading) {

      client.put(`playground/code/render`, args)
        .then(setRaw).finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);

  return [raw, setRaw, loading, setLoading];

};


export const FetchCodes = (classify, tag, name, pageSize, pageNum, orderBy, sort, setPageNum) => {

  const [Actions, setActions] = useState([]);
  const [total, setTotal] = useState([]);
  const [lock, setLock] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setPageNum(1)
    setActions([])
  },[classify, tag, orderBy, sort, setPageNum])


  useEffect(()=> {
    setLock(false);
  },[classify, tag, pageNum, orderBy, sort])

  useEffect(()=> {
    if (!lock) {
      setLock(true);
      setLoading(true)
      const args = {sort, orderBy, tag, pageSize, pageNum, name, classify};
      client.get(`playground/code?${stringify(args)}`).then(response => {
        setTotal(response.total)
        setActions(Actions.concat(response.data));

        message.success( `获取列表, 当前已展示 ${Actions.concat(response.data).length} / ${response.total} 条`)

      }).finally(() => setLoading(false));
    }
  }, [lock, pageNum, pageSize, Actions, tag, name, setLock, sort, orderBy, classify]);
  return [Actions, setActions, total, setLock, loading];
};

export const DeleteAction = (id, callback) => {

  client.delete(`playground/code/${id}`)
      .then(response => {
        callback && callback()
      }).catch(e => {
  }).finally(() => {

  })
  return null;
};




