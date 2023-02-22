import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import styled from "styled-components";
import Code from "./Code";
import MaterialHeaderMenu from "@jansora/material/es/layout/header/MaterialHeaderMenu";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/4 09:55:14 <br>
 * @since 1.0 <br>
 */

const StyledCenterHeaderWrapper = styled.div`
    a {
      color: var(--text-color-3);
    }
`


const MaterialPlay = () => {
    const {pathname} = useLocation();
    SetTitle('代码在线')
    return <React.Fragment>

        <MaterialHeaderMenu menu={[
            {pathname: "/play/java", icon: "icon-java", name: "Java"},
            {pathname: "/play/python", icon: "icon-Python", name: "Python"},
            {pathname: "/play/go", icon: "icon-golang", name: "Golang"},
            {pathname: "/play/javascript", icon: "icon-JavaScript", name: "Javascript"},
            {pathname: "/play/node", icon: "icon-nodejs", name: "NodeJS"},
        ]}
        />
        {pathname === '/play' && <Navigate replace={true} to="/play/java" />}

        <Routes>
            <Route path=":language" element={<Code />} />
            <Route path=":language/:hash" element={<Code />} />
        </Routes>


    </React.Fragment>;

}

export default MaterialPlay;