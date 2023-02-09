/*
* @file SetDescription.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-26 16:16
*/

import React, {useContext, useEffect} from "react";
import {GlobalStore} from "@jansora/global/es/store/global";
import {useResponsive} from "ahooks";
import {Message} from "semantic-ui-react";

const SetMessage = (description) => {



    const {message, dispatch} = useContext(GlobalStore);
    const responsive = useResponsive();
    document.title = `${description ? description + ' |' : ''} ${title}`

    useEffect(() => {
        const payload = description;
        dispatch({ type: 'description', payload });
    },[dispatch, description]);

    return <React.Fragment>
        {
            responsive.middle && !!message && <div><Message>
                1111
            </Message></div>
        }
    </React.Fragment>
};
export default SetMessage;
