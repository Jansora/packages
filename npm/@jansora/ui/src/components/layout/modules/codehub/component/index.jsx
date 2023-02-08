import React from 'react';

import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import SetTitle from "../../../../components/hooks/setter/SetTitle";
import Components from "./components";
import ComponentContent from "./sub/Component";
import SaveComponent from "./SaveComponent";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const Component = (props) => {
    const {pathname} = useLocation();

    SetTitle('组件仓库')

    return <React.Fragment>

        {pathname === '/codehub/component' && <Navigate replace={true} to="/codehub/component/ls" />}

        <Routes>
            <Route path="ls" element={<Components />} exact={true}/>
            <Route path="new" element={<SaveComponent id={null} />} />
            <Route path=":id/*" element={<ComponentContent />} exact={false} />
        </Routes>

    </React.Fragment>;
}

export default Component;