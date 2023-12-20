/*
* @file theme.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-17 10:39
*/
import {useContext, useEffect} from 'react';
import {COLOR, COLOR_LIST} from "../constant/global";
import {GlobalStore} from "../store/global";


const MountColor = () => {

  const { color } = useContext(GlobalStore);

  useEffect(() => {
    console.log("MountColor useEffect", color)
    COLOR_LIST.forEach(
        cur => document.documentElement.classList.remove([cur.color]))
    document.documentElement.classList.add(color);

    document.documentElement.setAttribute(COLOR, color);
    localStorage.setItem(COLOR, color)
  }, [color]);

}
export default MountColor;
