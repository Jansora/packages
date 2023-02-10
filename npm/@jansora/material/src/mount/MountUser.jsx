/*
* @file Login.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-18 15:42
*/
import {useContext, useEffect} from 'react';
import {GlobalStore} from "@jansora/global/es/store/global";

import {FetchCurrentUser} from "../request/user";


const MountUser = () => {

  const { dispatch } = useContext(GlobalStore);
  useEffect(()=> {
      FetchCurrentUser(user => dispatch({ type: 'user', payload: user }))
  }, [dispatch]);


   return null
}
export default MountUser;

