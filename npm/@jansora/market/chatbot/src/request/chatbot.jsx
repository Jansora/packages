import {useEffect, useState} from 'react';
import {client} from "@jansora/material/es/request";


export const Chat = (message, callback) => {
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    if(loading) {
        client.post('chatbot/chat', {message})
            .then(response =>  {
                callback(response)
            }).catch( e => {
        }).finally(()=> {
          setLoading(false)
        })
    }
      // eslint-disable-next-line
  }, [loading, message]);
  return [loading, setLoading];
};