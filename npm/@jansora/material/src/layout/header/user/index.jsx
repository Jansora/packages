import GetLoginStatus from "../../../hooks/getter/GetLoginStatus";
import {Dropdown} from "antd";
import React, {useContext} from "react";
import GetUser from "../../../hooks/getter/GetUser";
import Login from "./Login";
import {UserLogout} from "../../../request/user";
import {GlobalStore} from "@jansora/global/es/store/global";
import {Image} from "semantic-ui-react";


const User = () => {

    const user = GetUser();
    const loginStatus = GetLoginStatus();


    const { dispatch } = useContext(GlobalStore);

    const setUser = user => {
        dispatch({type: 'user', payload: user});
    };


    const signOut = () => {

        UserLogout(setUser);
    }

    if (!loginStatus) {
        return <Login />
    }

    return  <Dropdown menu={ {items: [{
            key: "退出登录",
            label: <span onClick={() => signOut()}>退出登录</span>
        }]
    }}
                      placement="bottom" arrow>
        <Image src={user.avatar} avatar  style={{cursor: "pointer"}} alt='avatar' />


    </Dropdown>

}
export default User;