/*
* @file SetTitle.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-26 16:16
*/

import {useContext, useEffect} from "react";
import {GlobalStore} from "@jansora/global/es/store/global";
import {useLocation} from "react-router-dom";

const SetTitle = (title) => {

    document.title = `${title ? title + ' - ' : ''} Jansora' Web App`

    const {dispatch} = useContext(GlobalStore);
    const {pathname} = useLocation();

    if (pathname === "/notebook/ls") {
        document.title = '11';
    }

    useEffect(() => {
        const payload = title;
        dispatch({ type: 'title', payload });
    },[dispatch, title]);
};
export default SetTitle;
