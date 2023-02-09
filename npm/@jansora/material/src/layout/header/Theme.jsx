import React, {useContext} from 'react';
import {GlobalStore} from "../../components/store/global";

import {Dropdown, Menu} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import {Label} from "semantic-ui-react";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:03:45 <br>
 * @since 1.0 <br>
 */


const themes = [
    {color:'red', description:'Red'},
    {color:'orange', description:'orange'},
    {color:'yellow', description:'Yellow'},
    {color:'olive', description:'Olive'},
    {color:'green', description:'Green'},
    {color:'blue', description:'Blue'},
    {color:'violet', description:'Violet'},
    {color:'purple', description:'Purple'},
    {color:'pink', description:'Pink'},
    {color:'brown', description:'Brown'},
    {color:'grey', description:'Grey'},
]
const Theme = () => {

    const { dispatch } = useContext(GlobalStore);


    const setTheme = theme => {
        dispatch({type: 'theme', payload: theme});
    };

    return  <Dropdown overlay={  <Menu>

        {themes.map((theme) => (
            <Menu.Item onClick={() => setTheme(theme.color)} key={theme.color}>
                <Label circular color={theme.color} size="tiny" empty style={{marginRight: 5}}/>
                {theme.description}
            </Menu.Item>
        ))}
    </Menu>
        }
                      placement="bottom" arrow>
            <SettingOutlined />
    </Dropdown>


}

export default Theme;