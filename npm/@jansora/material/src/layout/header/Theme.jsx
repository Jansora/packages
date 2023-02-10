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
    {color:'red', description:'Red', value: ''},
    {color:'orange', description:'orange', value: ''},
    {color:'yellow', description:'Yellow', value: ''},
    {color:'olive', description:'Olive', value: ''},
    {color:'green', description:'Green', value: ''},
    {color:'blue', description:'Blue', value: ''},
    {color:'violet', description:'Violet', value: ''},
    {color:'purple', description:'Purple', value: ''},
    {color:'pink', description:'Pink', value: ''},
    {color:'brown', description:'Brown', value: ''},
    {color:'grey', description:'Grey', value: ''},
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