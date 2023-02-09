/*
* @file SetDescription.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-26 16:16
*/

import {useContext, useEffect} from "react";
import {GlobalStore} from "@jansora/global/es/store/global";
import {useLocation} from "react-router-dom";

const SetDescription = (description) => {



    const {title, dispatch} = useContext(GlobalStore);
    document.title = `${description ? description + ' |' : ''} ${title}`
    const {pathname} = useLocation();

    if (pathname === "/notebook/ls") {
        document.title = '11';
    }
    useEffect(() => {
        const payload = description;
        dispatch({ type: 'description', payload });
    },[dispatch, description]);
};
export default SetDescription;
