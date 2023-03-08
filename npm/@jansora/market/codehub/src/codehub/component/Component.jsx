import React, {useEffect, useState} from 'react';
import {Button, Grid, Header, Icon, Label, Loader, Menu, Portal, Segment} from "semantic-ui-react";
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {Divider, message, Popconfirm} from "antd";
// import {Aside, FlexPadding, Label as CustomLabel, LinkItem, Section} from "@jansora/material/es/components/styled/frameworks";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {DeleteComponent, FetchComponent, FetchRenderComponent} from "../request/component";
import GetLoginStatus from "@jansora/material/es/hooks/getter/GetLoginStatus";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import {useDebounceFn, useResponsive} from "ahooks";
import MaterialContainer from "@jansora/material/es/components/view/container/MaterialContainer";
import MaterialContainerContent from "@jansora/material/es/components/view/container/MaterialContainerContent";
import MaterialContainerHeader from "@jansora/material/es/components/view/container/MaterialContainerHeader";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import GetUser from "@jansora/material/es/hooks/getter/GetUser";
import {Viewer} from "@jansora/bytemd";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import ComponentRender from "./ComponentRender";

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
        if (!Var.__language) {
            Var.__language = "html"
        }
        return Var

    } catch (e) {

    }
    return {}
}

const Component = (props) => {

  const {id} = useParams();
  const color = GetColor()
  const dark = GetDarkMode();
    const user = GetUser();
  const [component, componentLoading] = FetchComponent(id)
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const responsive = useResponsive();
  const loginStatus = GetLoginStatus();

    const [variable, setVariable] = useState(component.variable ? updateVar(component.variable) : {__language: "html"});


    const [raw, setRaw] = useState(component.raw ? component.raw : '');

    const [active, setActive] = useState('')

    // eslint-disable-next-line
    const [result, _, __, setLoading] = FetchRenderComponent(component.raw, variable);

    useEffect(() => {

        if(!!id) {
            setRaw(component.raw)
            setVariable(updateVar(component.variable))
        }



    },[id, component])


    useEffect(() => {
        setLoading(true)
        // eslint-disable-next-line
    }, [raw, variable])


    const {run: updateVarDebounce} = useDebounceFn(
        (value) => setVariable(updateVar(value)),
        {
            wait: 1000,
        },
    );
    const {run: setRawDebounce} = useDebounceFn(
        setRaw,
        {
            wait: 1000,
        },
    );

  SetDescription(`组件 - ${component.name}`)



  if(id && componentLoading) {
    return <Loader active inline='centered' inverted={dark}/>
  }

  return <MaterialContainer>
    <MaterialContainerHeader
        left={
        <>
            {/*<Divider type="vertical"  />*/}

            <Menu inverted={dark} size="mini" style={{margin: "0"}}>
                <Portal closeOnTriggerClick openOnTriggerClick trigger={<Menu.Item>变量</Menu.Item>}>
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
                <Portal closeOnTriggerClick openOnTriggerClick trigger={<Menu.Item>模板</Menu.Item>}
                >
                    <Segment inverted={dark} style={{left: '25vw', position: 'fixed', top: '20vh', height: '60vh', zIndex: 1000, width: '50vw'}}>
                        <Header as={'h3'} textAlign="center"> 模板 </Header>
                        <Divider />

                        <Viewer value={'```' + (variable && variable.__language ? variable.__language : "html") + '\n' + raw + '\n```'} />

                    </Segment>
                </Portal>
                <Portal closeOnTriggerClick openOnTriggerClick trigger={<Menu.Item>使用说明</Menu.Item>}>
                    <Segment inverted={dark} style={{left: '25vw', position: 'fixed', top: '20vh', height: '60vh', zIndex: 1000, width: '50vw'}}>
                        <Header as={'h3'} textAlign="center"> 使用说明 </Header>
                        <Divider style={{marginBottom: 0 , marginTop: 5}} />
                        <Viewer style={{height: 50}} value={'```xml\n' + `<${component.code} version=${component.versionId} args=${component.variable} />` + '\n```'} />
                    </Segment>
                </Portal>
            </Menu>
            </>
        }
        center={
          <React.Fragment>
            {component.title}
          </React.Fragment>
        }
        right={
            user.id === component.userId && <React.Fragment>


              <Divider type="vertical"  />

              <Button icon size="mini" color={color} as={Link} to={`/codehub/component/${component.id}/edit`}>
                <Icon name='edit' />
              </Button>

              <Divider type="vertical"  />
              <Popconfirm
                  title='你确认要删除吗？'
                  onConfirm={() => {
                      DeleteComponent(component.id, () => {
                          message.success({content: '删除成功'});
                          navigate("/notebook")
                      })
                  }}
                  onCancel={() => {
                    // message.error({ content: 'cancel' });
                  }}
              >
                <Button icon size="mini" color={"red"}>
                  <Icon name='delete' />
                </Button>
              </Popconfirm>
            </React.Fragment>

        }
    >

    </MaterialContainerHeader>
    <MaterialContainerContent>
    <StyledPageLoading>

        <Grid>
            {/*<Grid.Column width={7} style={{}}>*/}

            {/*    <Segment inverted={dark}>*/}
            {/*        <Label attached='top' color={color}>变量</Label>*/}
            {/*        <CodeEditor*/}
            {/*            dark={dark}*/}
            {/*            force={false}*/}
            {/*            id={"component-variable-edit"}*/}
            {/*            language={"json"}*/}
            {/*            value={JSON.stringify(variable, null, 2)}*/}
            {/*            onChange={updateVarDebounce}*/}
            {/*            style={{height: 500}}*/}
            {/*        />*/}
            {/*    </Segment>*/}
            {/*    /!*<Segment style={{padding: '1px'}} inverted={dark}>*!/*/}
            {/*    /!*    <Label attached='top' color={color}>模板(不可编辑)</Label>*!/*/}
            {/*    /!*    <Viewer value={'```' + (variable && variable.language ? variable.language : "html") + '\n' + component.raw + '\n```'} />*!/*/}
            {/*    /!*</Segment>*!/*/}


            {/*</Grid.Column>*/}
            <Grid.Column width={16}>
                <Segment inverted={dark}>
                    <Label attached='top' color={color}>预览</Label>
                    {/*<Viewer value={'```' + (variable && variable.language ? variable.language : "html") + '\n' + result + '\n```'} />*/}
                    <ComponentRender template={raw} variable={variable} style={{height: "calc(100vh - 210px)", overflowY: "auto"}} />
                </Segment>

            </Grid.Column>
        </Grid>



  </StyledPageLoading>
  </MaterialContainerContent>
  </MaterialContainer> ;
}

export default Component;
