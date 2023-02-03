/*
* @file theme.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-17 10:39
*/
import {useContext, useEffect} from 'react';
import {COLOR} from "../constant/global";
import {GlobalStore} from "../store/global";


const MountColor = () => {

  const { color } = useContext(GlobalStore);

  useEffect(() => {
    // COLOR_LIST.forEach(
    //     cur => document.body.classList.remove([cur.color]))
    // document.body.classList.add(color);
    document.documentElement.setAttribute(COLOR, color);
    localStorage.setItem(COLOR, color)
  }, [color]);

  return null
}
export default MountColor;
