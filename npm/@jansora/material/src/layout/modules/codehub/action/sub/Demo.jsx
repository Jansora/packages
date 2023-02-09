import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import GetTheme from "../../../../../components/hooks/getter/GetTheme";
import {useDebounceFn} from "ahooks";
import {Button, Grid, Icon, Label, Modal, Segment} from "semantic-ui-react";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import ActionRender from "../ActionRender";

import {FetchGenerateAction} from "../../../../../components/request/action";
import SetDescription from "../../../../../components/hooks/setter/SetDescription";

/**
 * <Description> Description for Demo <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/15 00:43:15 <br>
 * @since 1.0 <br>
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

const Demo = ({action}) => {

  const {id} = useParams();
  const theme = GetTheme()

  const [variable, setVariable] = useState(action.variable ? updateVar(action.variable) : {language: "html"});

  const [raw, setRaw] = useState(action.raw ? action.raw : '');

  const [url, setUrl, downloadLoading, setDownloadLoading] = FetchGenerateAction(raw, variable);


  SetDescription(`模板 - ${action.name}`)

  useEffect(() => {

    if(!!id) {
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


  return <React.Fragment>


        <Modal
          size="mini"
          onClose={() => setUrl(null)}
          open={downloadLoading || !!url}
        >
          <Modal.Header>获取下载链接</Modal.Header>
          <Modal.Content style={{justifyContent: "center"}}>
            {
              !!url &&

                <div><Icon name="download" color="green" /><a target='_self' rel='noopener noreferrer' href={url}>{action.name} </a>
                </div>
            }
          </Modal.Content>
          <Modal.Actions>
            <Button color={theme} onClick={() => setUrl(null)}>
              关闭
            </Button>
          </Modal.Actions>
        </Modal>
        {/*<Button  color={theme} size={"tiny"} floated={"right"}>  </Button>*/}

      <Button floated="right" style={{marginTop: -35}} size="tiny" color={theme} onClick={() => setDownloadLoading(true)}>
        <Icon name="download" color="white" />
        下载当前配置结果 </Button>
     <Grid>
        <Grid.Column width={5} style={{paddingLeft: 0}}>
          <Grid>
            <Grid.Column width={16} style={{padding: 0}} >
              <Segment style={{padding: 0}} fuild>
                <Label attached='top' color={theme}>变量</Label>
                <CodeEditor
                    force={false}
                    id={"action-variable-edit"}
                    language={"json"}
                    value={JSON.stringify(variable, null, 2)}
                    onChange={updateVarDebounce}
                    style={{height: 350}}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={16} style={{padding: 0}} >
              <Segment style={{padding: 0}}>
                <Label attached='top' color={theme}>模板</Label>
                <CodeEditor
                    force={false}
                    id={"action-raw-edit"}
                    language={"xml"}
                    value={raw}
                    onChange={setRawDebounce}
                    style={{height: 350}}
                />

              </Segment>
            </Grid.Column>
          </Grid>

        </Grid.Column>
      <Grid.Column width={11} style={{paddingRight: 0}}>
        <Segment inverted>
          <Label attached='top' color={theme}>预览</Label>
          <ActionRender template={raw} variable={variable} style={{height: 600}} />

        </Segment>

      </Grid.Column>
    </Grid>
  </React.Fragment>;
}

export default Demo;