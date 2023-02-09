/*
* @file GetLoginStatus.jsx
* @author jansora
* @date 2019-12-17 11:01
*/
import {useContext, useEffect, useState} from 'react';

import {GlobalStore} from "@jansora/global/es/store/global";

const GetLoginStatus = () => {

  const [status, setStatus] = useState(false);
  const {user} = useContext(GlobalStore);

  useEffect(() => {
    setStatus(!!user.id)
  }, [user]);


  return status
}
export default GetLoginStatus;
