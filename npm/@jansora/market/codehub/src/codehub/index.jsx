import React from 'react';

import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import Action from "./action";
import styled from "styled-components";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import Component from "./component";
import MaterialHeaderMenu from "@jansora/material/es/layout/header/MaterialHeaderMenu";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledCenterHeaderWrapper = styled.div`
    a {
      color: var(--text-color-3);
    }
`

const CodeHub = (props) => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();

    SetTitle('CodeHub')
    // <MaterialSearchView baseUrl={'codehub/component'} name={'组件'} description={"组件列表"} title={'组件商场'} />
    return <React.Fragment>

        <MaterialHeaderMenu menu={[
                {pathname: "/codehub/component", icon: "icon-java", name: "组件仓库"},
                {pathname: "/codehub/action", icon: "icon-Python", name: "聚合市场"},
            ]}
        />

        {pathname === '/codehub' && <Navigate replace={true} to="/codehub/component/ls" />}


        {/*<Navigate replace={true} to="/notebook/ls" />*/}
        <Routes>
            {/*<Redirect from="/notebook" to="/notebook/ls" exact={true} />*/}
            <Route path="component/*" element={<Component  />} />
            <Route path="action/*" element={<Action  />} />
        </Routes>

    </React.Fragment>;
}

export default CodeHub;