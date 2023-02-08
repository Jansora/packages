import React from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
// import EasyCodes from "../../../../easycode/src/layout/easycode/notes";
// import SaveAction from "../../../../easycode/src/layout/easycode/SaveAction";
// import EasyCode from "../../../../easycode/src/layout/easycode/action";
import SetTitle from "../../../components/hooks/setter/SetTitle";
import CenterHeader from "../../header/CenterHeader";
import StyledIconFont from "../../../components/styled/StyledIconFont";
import styled from "styled-components";
import Code from "./Code";
import {Menu} from "semantic-ui-react";
import GetTheme from "../../../components/hooks/getter/GetTheme";
import StyledText from "../../../components/styled/base/StyledText";

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


const Play = () => {
    const navigate = useNavigate();
    const color = GetTheme();
    const {pathname} = useLocation();

    SetTitle('代码在线')

    return <React.Fragment>
        <CenterHeader>
            <StyledCenterHeaderWrapper>

                <Menu inverted>
                    {
                        [
                            {pathname: "/play/java", icon: "icon-java", name: "Java"},
                            {pathname: "/play/python", icon: "icon-Python", name: "Python"},
                            {pathname: "/play/go", icon: "icon-golang", name: "Golang"},
                            {pathname: "/play/javascript", icon: "icon-JavaScript", name: "Javascript"},
                            {pathname: "/play/node", icon: "icon-nodejs", name: "NodeJS"},
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
                    )}

                </Menu>

            </StyledCenterHeaderWrapper>

        </CenterHeader>
        {pathname === '/play' && <Navigate replace={true} to="/play/java" />}


        {/*<Navigate replace={true} to="/notebook/ls" />*/}
        <Routes>

            {/*<Route path="new" element={<SaveNote  />} />*/}
            <Route path=":language" element={<Code />} />
            <Route path=":language/:hash" element={<Code />} />
            {/*<Route path=":language(java|python|go|javascript|node|sql)" element={<CompilerContainer />} />*/}


        </Routes>


    </React.Fragment>;

}

export default Play;