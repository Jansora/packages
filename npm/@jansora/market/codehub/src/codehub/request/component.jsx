import {useEffect, useState} from 'react';
import {client} from "@jansora/material/es/request/index";
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
      client.get(`codehub/component/classifies`)
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
      client.get(`codehub/component/logos`)
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
      client.get(`codehub/component/classifyCounts`)
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
      client.get(`codehub/component/tags`)
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

      client.get(`codehub/component/tags?${stringify({classify})}`)
          .then(data => setRelationTags(data.sort((a,b) => b.count - a.count).map(tag => tag)))
          .finally(()=> {  setLoading(false)
          })


  }, [relationTagsLoading, classify]);




  return [relationTags, relationTagsLoading];
};

export const InsertComponent = (data, callback) => {


  client.post('codehub/component', data)
      .then(response =>  {
          message.success("添加成功")
          callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const UpdateComponent = (data, callback) => {
  client.put('codehub/component', data)
      .then(response =>  {
        // message.success("更新成功")
        callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const FetchComponent = (id, version) => {


  const [Component, setComponent] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {

    if(loading && !!id) {
      client.get(`codehub/component/${id}?${stringify({version})}`)
          .then(setComponent).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id, version]);


  // console.log("Component", Component)
  return [Component, loading];
};

export const FetchRenderComponent = (template, variable) => {

  const [raw, setRaw] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    if(loading) {
      const args = {
        variable: JSON.stringify(variable, null, 2), raw: template,
      }
      client.put(`codehub/component/render`, args)
        .then(setRaw).finally(()=> {  setLoading(false)
      })
    }
    // eslint-disable-next-line
  }, [loading]);

  return [raw, setRaw, loading, setLoading];

};


export const FetchComponents = (classify, tag, name, pageSize, pageNum, orderBy, sort, setPageNum) => {

  const [Components, setComponents] = useState([]);
  const [total, setTotal] = useState([]);
  const [lock, setLock] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setPageNum(1)
    setComponents([])
  },[classify, tag, orderBy, sort, setPageNum, pageSize])


  useEffect(()=> {
    setLock(false);
  },[classify, tag, pageNum, orderBy, sort, pageSize])

  useEffect(()=> {
    if (!lock) {
      setLock(true);
      setLoading(true)
      const args = {sort, orderBy, tag, pageSize, pageNum, name, classify};
      client.get(`codehub/component/search?${stringify(args)}`).then(response => {
        setTotal(response.total)
        setComponents(Components.concat(response.data));

        message.success( `获取列表, 当前已展示 ${Components.concat(response.data).length} / ${response.total} 条`)

      }).finally(() => setLoading(false));
    }
  }, [lock, pageNum, Components, tag, name, setLock, sort, orderBy, classify, pageSize]);
  return [Components, setComponents, total, setLock, loading];
};

export const DeleteComponent = (id, callback) => {

  client.delete(`codehub/component/${id}`)
      .then(response => {
        callback && callback()
      }).catch(e => {
  }).finally(() => {

  })
  return null;
};




