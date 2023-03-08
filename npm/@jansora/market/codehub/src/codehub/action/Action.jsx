import React, {useEffect, useState} from 'react';
import {Button, Grid, Header, Icon, Label, Loader, Menu, Portal, Segment} from "semantic-ui-react";
import {Link, useNavigate, useParams} from 'react-router-dom';

import {Divider, message, Popconfirm, Tooltip} from "antd";
import {DeleteAction, FetchAction, FetchGenerateAction} from "../request/action";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import {useDebounceFn} from "ahooks";
import MaterialContainerHeader from "@jansora/material/es/components/view/container/MaterialContainerHeader";
import MaterialContainer from "@jansora/material/es/components/view/container/MaterialContainer";
import GetUser from "@jansora/material/es/hooks/getter/GetUser";
import {CodeEditor} from "@jansora/monaco";
import MaterialContainerContent from "@jansora/material/es/components/view/container/MaterialContainerContent";
import {Viewer} from "@jansora/bytemd";
import GetTheme from "@jansora/material/es/hooks/getter/GetTheme";
import ActionRender from "./ActionRender";
import StyledColorText from "@jansora/material/es/components/styled/base/StyledColorText";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 16:26:57
 */
const updateVar = (value) => {

  try{
    // eslint-disable-next-line
    const Var = Function('"use strict";return (' + value + ')')();
    // console.log("Var", Var)
    if (!Var.language) {
      Var.language = "html"
    }
    return Var

  } catch (e) {

  }
  return {}
}

const Action = () => {

  const {id} = useParams();
  const color = GetColor()
  const dark = GetTheme();
  const user = GetUser();
  const [action, actionLoading] = FetchAction(id)
  const navigate = useNavigate();


  const [variable, setVariable] = useState({});

  const [raw, setRaw] = useState(action.raw ? action.raw : '');


  const [, , , setDownloadLoading] = FetchGenerateAction(raw, variable, action.name, (url) => {
    message.success(<span><a target='_self' rel='noopener noreferrer' href={url} download={`${action.name}.zip`}><StyledColorText>点击下载 {action.name}.zip </StyledColorText> </a> </span>)
  });

  useEffect(() => {

    if(!!id) {
      setRaw(action.raw)
      setVariable(updateVar(action.variable))
    }


  },[id, action])

  const {run: updateVarDebounce} = useDebounceFn(
      (value) => setVariable(updateVar(value)),
      {
        wait: 3000,
      },
  );
  const {run: setRawDebounce} = useDebounceFn(
      setRaw,
      {
        wait: 3000,
      },
  );

  if(id && actionLoading) {
    return <Loader active={actionLoading} inline='centered' inverted={dark} />

  }

  return <MaterialContainer>
    <MaterialContainerHeader
        left={
          <>
            <Menu inverted={dark} size="mini" style={{margin: "0"}}>
              <Portal
                  closeOnTriggerClick
                  openOnTriggerClick
                  trigger={<Menu.Item>变量</Menu.Item>}
              >
                <Segment inverted={dark} style={{left: '25vw', position: 'fixed', top: '20vh', height: '60vh', zIndex: 1000, width: '50vw'}}>
                  <Header as={'h3'} textAlign="center"> 变量 </Header>
                  <Divider />
                  <CodeEditor
                      dark={dark}
                      force={false}
                      id={"action-variable-edit"}
                      language={"json"}
                      value={JSON.stringify(variable, null, 2)}
                      onChange={updateVarDebounce}
                      // style={{height: '400px'}}
                      style={{height: 'calc(60vh - 150px)'}}
                  />
                </Segment>
              </Portal>
              <Portal
                  closeOnTriggerClick
                  openOnTriggerClick
                  trigger={<Menu.Item>模板</Menu.Item>}
              >
                <Segment inverted={dark} style={{left: '25vw', position: 'fixed', top: '20vh', height: '60vh', zIndex: 1000, width: '50vw'}}>
                  <Header as={'h3'} textAlign="center"> 模板 </Header>
                  <Divider />

                  <CodeEditor
                      dark={dark}
                      force={false}
                      id={"action-raw-edit"}
                      language={"html"}
                      value={raw}
                      onChange={setRawDebounce}
                      style={{height: 'calc(60vh - 150px)'}}
                  />

                  {/*<Viewer value={'```' + (variable && variable.language ? variable.language : "html") + '\n' + action.raw + '\n```'} />*/}
                </Segment>
              </Portal>
              <Portal
                  closeOnTriggerClick
                  openOnTriggerClick
                  trigger={<Menu.Item>使用说明</Menu.Item>}
              >
                <Segment inverted={dark} style={{left: '40%', position: 'fixed', top: '100px', zIndex: 1000,}}>
                  <Header as={'h3'} textAlign="center"> 使用说明 </Header>
                  <Divider style={{marginBottom: 0 , marginTop: 5}} />


                  <Viewer value={'```xml\n' + `<${action.actionCode} version=${action.versionId} args=${action.variable} />` + '\n```'} />
                </Segment>
              </Portal>

            </Menu>
          </>
        }
        center={
          <React.Fragment>
            {action.title}
          </React.Fragment>
        }
        right={

          <React.Fragment>
            <Tooltip placement="bottom" title={'获取下载链接'}>
              <Button icon size="mini" color={"green"} onClick={() => setDownloadLoading(true)} >
                <Icon name="download" />
              </Button>
            </Tooltip>

            {
              user.id === action.userId && <React.Fragment>

                  <Popconfirm
                      title='你确认要克隆吗？'
                      onConfirm={() => {
                        navigate(`/codehub/component/new?clone=${id}`)
                      }}
                      onCancel={() => {
                      }}
                  >
                    <Button icon size="mini" color={color}>
                      <Icon name='copy' />
                    </Button>
                  </Popconfirm>
                  <Divider type="vertical"  />
              <Divider type="vertical"/>

              <Button icon size="mini" color={color} as={Link} to={`/codehub/action/${id}/edit`}>
                <Icon name='edit'/>
              </Button>

              <Divider type="vertical"/>
              <Popconfirm
                  title='你确认要删除吗？'
                  onConfirm={() => {
                    DeleteAction(id, () => {
                      message.success({content: '删除成功'});
                      navigate("/codehub/component")
                    })
                  }}
                  onCancel={() => {
                    // message.error({ content: 'cancel' });
                  }}
              >
                <Button icon size="mini" color={"red"}>
                  <Icon name='delete'/>
                </Button>
              </Popconfirm>
            </React.Fragment>

            }
          </React.Fragment>
        }
    >

    </MaterialContainerHeader>
    <MaterialContainerContent>
      <StyledPageLoading>
        <Grid style={{marginTop: -5}} >
          {/*    <Grid.Column width={8} >*/}
          {/*      <Segment style={{padding: '30px 0px 0 0'}}  inverted={dark}>*/}
          {/*        <Label attached='top' color={color}>变量</Label>*/}
          {/*        /!*<CodeEditor*!/*/}
          {/*        /!*    dark={dark}*!/*/}
          {/*        /!*    force={false}*!/*/}
          {/*        /!*    id={"action-variable-edit"}*!/*/}
          {/*        /!*    language={"json"}*!/*/}
          {/*        /!*    value={JSON.stringify(variable, null, 2)}*!/*/}
          {/*        /!*    onChange={updateVarDebounce}*!/*/}
          {/*        /!*    style={{height: 200}}*!/*/}
          {/*        /!*//*/}
          {/*      </Segment>*/}
          {/*    </Grid.Column>*/}
          {/*    <Grid.Column width={8}  >*/}
          {/*      <Segment style={{padding: '30px 0px 0 0'}} inverted={dark}>*/}
          {/*        <Label attached='top' color={color}>模板</Label>*/}
          {/*        <CodeEditor*/}
          {/*            dark={dark}*/}
          {/*            force={false}*/}
          {/*            id={"action-raw-edit"}*/}
          {/*            language={"xml"}*/}
          {/*            value={raw}*/}
          {/*            onChange={setRawDebounce}*/}
          {/*            style={{height: 200}}*/}
          {/*        />*/}
          {/*      </Segment>*/}
          {/*</Grid.Column>*/}
          <Grid.Column width={16} >
            <Segment inverted={dark}>
              <Label attached='top' color={color}>预览</Label>
              <ActionRender template={raw} variable={variable} style={{
                tree: {height: "calc(100vh - 250px)", overflowY: "auto"},
                component: {height: "calc(100vh - 250px)", overflowY: "auto"},
              }} />

            </Segment>

          </Grid.Column>
        </Grid>


      </StyledPageLoading>
    </MaterialContainerContent>
  </MaterialContainer>;
}

export default Action;
