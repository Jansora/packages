/*
* @file GetTheme.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2020-01-16 15:23
*/
import {useContext} from 'react';
import {GlobalStore} from "@jansora/global/es/store/global";
import {THEME_DARK} from "@jansora/global/lib/constant/global";


const GetDarkMode = () => {

  const { theme } = useContext(GlobalStore);
  return theme === THEME_DARK;
}
export default GetDarkMode;
