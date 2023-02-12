import GetLoginStatus from "../../../hooks/getter/GetLoginStatus";

import StyledIconFont from "../../../components/styled/StyledIconFont";
import React, {useContext, useState} from "react";

import styled from "styled-components";
import {GlobalStore} from "@jansora/global/es/store/global";
import {UserLogin} from "../../../request/user";
import {Divider, message} from "antd";
import {Button, Dimmer, Form, Grid, Header, Icon, Loader, Modal, Segment} from "semantic-ui-react";
import GetColor from "../../../hooks/getter/GetColor";

// const FormItem = Form.Item;

const StyledLoginWrapper = styled.section`
 svg {
   cursor: pointer;
   //font-size: 32px;
 }
`

const Login = () => {

    const color = GetColor();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepLogin, setKeepLogin] = useState(true);

    // const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const loginStatus = GetLoginStatus();

    const { dispatch } = useContext(GlobalStore);

    const waiting = () => {
        message.warn("即将支持!")
    }
    const setUser = user => {
        dispatch({type: 'user', payload: user});
        // history.push(`/about/user/current`);
    };
    const signIn = () => {

        const data = { username, password, keepLogin };
        setLoading(true);
        UserLogin(data, setLoading, setUser);
    }

    if (loginStatus) {
        return
    }
    return  <StyledLoginWrapper>
        <Modal
            dimmer={'blurring'}
            trigger={<StyledIconFont type="icon-signin" title="登录"
                                     // onClick={() => setVisible(true)}
            />}
            style={{width: 350}}
        >


            <Segment inverted>
                <Dimmer active={loading}>
                    <Loader active={loading}>登录中</Loader>
                </Dimmer>
                <Header as='h3' textAlign='center' style={{margin: "10px"}}>登录</Header>

            <Form style={{padding: "1rem"}} inverted>
                <Form.Input
                    required
                    label='用户名' placeholder='请输入你的用户名(登录时使用)' type='text'
                    value={username} onChange={e => setUsername(e.target.value)}/>
                <Form.Input label='密码' type="password" placeholder='请输入你的密码' value={password}
                            onChange={e => setPassword(e.target.value)}/>
                <Form.Checkbox
                    // on
                    onChange={()=>setKeepLogin(!keepLogin)}
                    checked={keepLogin}
                    inline label='保持登录状态' />
                <Divider style={{margin: '20px 0 12px 0'}}/>
                <Button fluid color={color} content='登录' onClick={() => signIn()}/>
                <Divider style={{margin: "30px 0"}}> 其他登录方式 </Divider>

                <Grid columns={5}>
                    <Grid.Column><Icon name="github"  style={{fontSize: 20, cursor: "pointer", marginLeft: 7}} onClick={waiting} /></Grid.Column>
                    <Grid.Column><StyledIconFont type="icon-weixin"  style={{fontSize: 20, cursor: "pointer", marginLeft: 7}} onClick={waiting} /></Grid.Column>
                    <Grid.Column><StyledIconFont type="icon-weibo"  style={{fontSize: 20, cursor: "pointer", marginLeft: 7}} onClick={waiting} /></Grid.Column>
                    <Grid.Column><StyledIconFont type="icon-google"  style={{fontSize: 20, cursor: "pointer", marginLeft: 7}} onClick={waiting} /></Grid.Column>
                    <Grid.Column><StyledIconFont type="icon-twitter"  style={{fontSize: 20, cursor: "pointer", marginLeft: 7}} onClick={waiting} /></Grid.Column>
                </Grid>

            </Form>
            </Segment>
    </Modal>
    </StyledLoginWrapper>

}
export default Login;