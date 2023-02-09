import React from 'react';

import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import SetTitle from "../../../components/hooks/setter/SetTitle";
import Action from "./action";
import {Menu} from "semantic-ui-react";
import StyledIconFont from "../../../components/styled/StyledIconFont";
import StyledText from "../../../components/styled/base/StyledText";
import CenterHeader from "../../header/CenterHeader";
import styled from "styled-components";
import GetTheme from "../../../components/hooks/getter/GetTheme";
import Component from "./component";

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
    const color = GetTheme();
    const {pathname} = useLocation();

    SetTitle('CodeHub')

    return <React.Fragment>
        <CenterHeader>
            <StyledCenterHeaderWrapper>
                <Menu inverted>
                    {
                        [
                            {pathname: "/codehub/component", icon: "icon-java", name: "组件仓库"},
                            {pathname: "/codehub/action", icon: "icon-Python", name: "聚合市场"},
                        ].map((item, index) =>
                            <Menu.Item
                                key={index}
                                onClick={() => navigate(item.pathname)}
                                active={pathname.startsWith(item.pathname)}
                                color={pathname.startsWith(item.pathname) ? color : "black"}
                            >
                                <StyledIconFont type={item.icon} style={{width: 16, height: 16, marginRight: 3, marginBottom: -2}} />
                                <StyledText>{item.name}</StyledText>
                            </Menu.Item>
                        )
                    }
                </Menu>


            </StyledCenterHeaderWrapper>

        </CenterHeader>
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