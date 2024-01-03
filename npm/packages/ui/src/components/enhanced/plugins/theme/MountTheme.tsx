"use client"
/*
* @file theme.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-17 10:39
*/
import {useEffect} from 'react';
import {useTheme} from "next-themes";


const MountTheme = () => {
  const { setTheme } = useTheme()


  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e => {
      if (e.matches) {
        setTheme("dark")
      }
      else {
        setTheme("light")
      }
    });
  })

  return <></>
}
export default MountTheme;
