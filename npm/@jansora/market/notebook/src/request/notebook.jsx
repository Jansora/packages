import {useEffect, useState} from 'react';
import {client} from "@jansora/material/es/request/index";
import {stringify} from 'qs'
import {IsNumber} from "@jansora/material/es/components/utils";
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
      client.get(`notebook/note/classifies`)
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
      client.get(`notebook/note/logos`)
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
      client.get(`notebook/note/classifyCounts`)
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
      client.get(`notebook/note/tags`)
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
      client.get(`notebook/note/tags?${stringify({classify})}`)
          .then(data => setRelationTags(data))
          .finally(()=> {  setLoading(false)
          })
    }



  }, [relationTagsLoading, classify]);



  return [relationTags, relationTagsLoading];
};

export const SaveNoteRequest = (data, callback) => {
  client.put('notebook/note', data)
      .then(response =>  {
        message.success("更新成功")
        callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};

export const SaveNoteDraft = (data, callback) => {
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


export const DeleteNote = (id, callback) => {

  client.delete(`notebook/note/${id}`)
      .then(response => {
        callback && callback()
      }).catch(e => {
  }).finally(() => {

  })
  return null;
};

