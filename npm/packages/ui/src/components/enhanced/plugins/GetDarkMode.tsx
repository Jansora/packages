/*
* @file GetUser.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2020-01-16 15:23
*/
import {useTheme} from "next-themes";
// import {GlobalStore} from "@jansora/global/es/store/global";


const GetDarkMode = () => {
  const { theme } = useTheme()
  // const { user } = useContext(GlobalStore);
  return theme !== "light";
}
export default GetDarkMode;
