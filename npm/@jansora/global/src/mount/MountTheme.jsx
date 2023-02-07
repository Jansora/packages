/*
* @file theme.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-17 10:39
*/
import {useContext, useEffect} from 'react';
import {THEME, THEME_DARK, THEME_LIGHT} from "../constant/global";
import {GlobalStore} from "../store/global";


const MountTheme = () => {

  const { theme, dispatch } = useContext(GlobalStore);
  const dark = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    dark.addEventListener("change",e => {
      if (e.matches) {
        dispatch({type: 'theme', payload: THEME_DARK});
      } else {
        dispatch({type: 'theme', payload: THEME_LIGHT});
      }
    });
  })


  useEffect(() => {
    // THEME_LIST.forEach(
    //     cur => document.body.classList.remove([cur.theme]))
    // document.body.classList.add(theme);

    document.documentElement.setAttribute(THEME, theme);
    localStorage.setItem(THEME, theme)
  }, [theme]);

  return null
}
export default MountTheme;
