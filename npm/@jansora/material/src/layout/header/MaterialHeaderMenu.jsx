import React from 'react';
import StyledIconFont from "../../components/styled/StyledIconFont";
// import User from "../../../view/user";
// import Theme from "./Theme";
import {useLocation, useNavigate} from "react-router-dom";
import GetDarkMode from "../../hooks/getter/GetDarkMode";
import {Menu} from "semantic-ui-react";
import CenterHeader from "./CenterHeader";
import GetColor from "../../hooks/getter/GetColor";
import StyledText from "../../components/styled/base/StyledText";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:03:45 <br>
 * @since 1.0 <br>
 */



const MaterialHeaderMenu = ({menu}) => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();




    return <CenterHeader>
        <Menu inverted={GetDarkMode()}>
            {
                menu.map((item, index) =>
                    <Menu.Item
                        key={index}
                        onClick={() => navigate(item.pathname)}
                        active={pathname.startsWith(item.pathname)}
                        color={pathname.startsWith(item.pathname) ? color : null}
                    >
                        {
                            item.icon &&
                            <StyledIconFont type={item.icon} style={{width: 16, height: 16, marginRight: 3, marginBottom: -2}} />
                        }


                        <StyledText>{item.name}</StyledText>
                    </Menu.Item>
                )
            }
        </Menu>

    </CenterHeader>;
}

export default MaterialHeaderMenu;