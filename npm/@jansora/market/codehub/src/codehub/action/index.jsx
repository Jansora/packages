import React from 'react';

import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import Actions from "./actions";
import ActionContent from "./sub/Action";
import SaveAction from "./SaveAction";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const Action = (props) => {
    const {pathname} = useLocation();

    SetTitle('聚合市场')

    return <React.Fragment>

        {pathname === '/codehub/action' && <Navigate replace={true} to="/codehub/action/ls" />}

        <Routes>
            <Route path="ls" element={<Actions />} exact={true}/>
            <Route path="new" element={<SaveAction id={null} />} />
            <Route path=":id/*" element={<ActionContent />} exact={false} />
        </Routes>

    </React.Fragment>;
}

export default Action;