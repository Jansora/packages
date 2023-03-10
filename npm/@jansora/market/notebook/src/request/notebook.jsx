import {useEffect, useState} from 'react';
import {client} from "@jansora/material/es/request/index";
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

export const SaveNoteRequest = (data, callback) => {
  client.put('notebook', data)
      .then(response =>  {
        message.success("更新成功")
        callback && callback(response)

      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};

export const SaveNoteDraft = (data, callback) => {
  client.post('notebook/draft', data)
      .then(response =>  {
        callback && callback(response)
      }).catch( e => {
  }).finally(()=> {
  })


  return null;
};
export const FetchNote = (id) => {


  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {

      client.get(`notebook/${id}`)
          .then(setNote).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id]);
  return [note, loading];
};



export const FetchEntity = (baseUrl, id, cloneId) => {

  const [entity, setEntity] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {

    if(loading && !!id) {
      client.get(`${baseUrl}/${id}`)
          .then(response => {
            setEntity(response)
          }).finally(()=> {  setLoading(false)
      })
    }
    else if(loading && !!cloneId) {
      client.get(`${baseUrl}/${cloneId}`)
          .then(response => {
            response.id = null
            setEntity(response)
          }).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id, cloneId]);

  return [entity, loading];
};

export const FetchEditableNote = (baseUrl, id, cloneId) => {

  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    // if(loading && !!id  && IsNumber(id)) {
    //   client.get(`notebook/draft/${id}`)
    //       .then(setNote).finally(()=> {  setLoading(false)
    //   })
      if(loading && !!id && IsNumber(id)) {
        client.get(`${baseUrl}/${id}`)
            .then(response => {
              setNote(response)
            }).finally(()=> {  setLoading(false)
        })
      }
      else if(loading && !!cloneId && IsNumber(cloneId)) {
        client.get(`${baseUrl}/${cloneId}`)
            .then(response => {
              response.id = null
              setNote(response)
            }).finally(()=> {  setLoading(false)
        })
      }
    // }
  }, [loading, id, cloneId]);
  return [note, loading];
};

export const FetchHistoryDocumentContent = (id) => {

  const [raw, setRaw] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
  }, [id])
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {
      client.get(`document/version/${id}`)
          .then(setRaw).finally(()=> {  setLoading(false)
      })
    }
  }, [loading, id]);
  return [raw, loading];
};
export const FetchHistoryNotes = (id, resource) => {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(loading && !!id  && IsNumber(id)) {

      client.get(`notebook/versions/${id}`)
          .then(setNotes).finally(()=> {  setLoading(false)
      })
    }

  }, [loading, id]);
  return [notes, loading];
};


export const DeleteNote = (id, callback) => {

  client.delete(`notebook/${id}`)
      .then(response => {
        callback && callback()
      }).catch(e => {
  }).finally(() => {

  })
  return null;
};

export const ShareNote = (id, callback) => {

  client.post(`notebook/share/${id}`)
      .then(response => {
        callback && callback(response)
      }).catch(e => {
  }).finally(() => {

  })
  return null;
};
