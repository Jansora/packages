/*
* @file theme.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-17 10:39
*/
import {useContext, useEffect} from 'react';
import {THEME, THEME_LIST} from "../constant/global";
import {GlobalStore} from "../store/global";


const MountTheme = () => {

  const { theme } = useContext(GlobalStore);

  useEffect(() => {
    THEME_LIST.forEach(
        cur => document.body.classList.remove([cur.theme]))
    document.body.classList.add(theme);
    localStorage.setItem(THEME, theme)
  }, [theme]);

  return null
}
export default MountTheme;
