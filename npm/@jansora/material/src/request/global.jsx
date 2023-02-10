import React, {useEffect, useState} from 'react';
import {client} from "./index";

/**
 * <Description> Description for global <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/15 16:00:43 <br>
 * @since 1.0 <br>
 */

export const FetchNavigate = () => {


  const [navigate, setNavigate] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {

    if(loading) {
      client.get(`global/navigate`)
        .then(setNavigate).finally(()=> {  setLoading(false)
      })
    }

  }, [loading]);

  return [navigate, loading];
};