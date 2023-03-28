import React from 'react';
// import User from "../../../view/user";
// import Theme from "./Theme";
import GetDarkMode from "../../hooks/getter/GetDarkMode";
import {Menu} from "semantic-ui-react";
import CenterHeader from "./CenterHeader";
import MaterialMenu from "./MaterialMenu";

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

    return <CenterHeader>
        <Menu inverted={GetDarkMode()}>
            <MaterialMenu menu={menu} />
        </Menu>

    </CenterHeader>;
}

export default MaterialHeaderMenu;