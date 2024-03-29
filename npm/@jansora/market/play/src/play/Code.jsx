import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {CodeEditor} from "@jansora/monaco/lib";
// import CodeEditor from "../editor/CodeEditor";
// import DiffEditor from "../editor/DiffEditor";
import {Compiler, FetchCode, getDefaultLanguageCode, ShareCode} from "../request/playground";
import {Viewer} from "@jansora/bytemd";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";

import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import {Button, Divider, Grid, Header, Icon, Input, Modal, Segment} from "semantic-ui-react";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
// import {DiffEditor} from "@jansora/monaco";


/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/26 23:30:35
 */
const Code = () => {

  const color = GetColor();
  const dark = GetDarkMode();
  const {language, hash} = useParams();

  SetDescription(`${language}`)

  const [name, setName] = useState("");

  const [code, setCode] = useState()

  const [result, compilerLoading, setCompilerLoading] = Compiler(code, language);
  const [shareResult, shareLoading, setShareLoading] = ShareCode(code, language, name);
  const [fetchCode] = FetchCode(hash, language);

  const share = () => {
    setShareLoading(true)
  }

  useEffect(() => {
    setCode(getDefaultLanguageCode(language))
  }, [language])


  useEffect(() => {
    if (!!fetchCode && !!fetchCode.code) {
      setCode(fetchCode.code)
    }

  }, [fetchCode])


  const md = '```\n' + result.data + '\n```'


  SetDescription(`${fetchCode.name}`)




  const shareMD = '```' + (language === "node" ? "javascript" : language) + '\n' + code + '\n```'



  return <StyledPageLoading>

    <Grid>
        <Grid.Column width={12}>

          <div style={{padding: 0}}>
            {
              code != null &&
              <CodeEditor
                  dark={dark}
                force={false}
                id={"code-editor-template"}
                language={language === "node" ? "javascript" : language}
                value={code}
                onChange={setCode}
                style={{height: 650}}
              />
            }
            {/*{*/}
            {/*    code != null &&*/}
            {/*    <DiffEditor*/}
            {/*        dark={dark}*/}
            {/*        modified={{data:  "a", language: 'markdown'}}*/}
            {/*        original={{data: 'document', language: 'markdown'}} />*/}
            {/*}*/}

          </div>

        </Grid.Column>
        <Grid.Column width={4}>

          <div style={{minHeight: 678}}>
            <div>
              <Button
                  color={color} size="tiny"
                      loading={compilerLoading} disabled={compilerLoading}
                      onClick={() => {setCompilerLoading(true);}}
                      style={{marginRight: 10}} >
                <Icon name="terminal" />
                运行
              </Button>

              <Modal
                  style={{width: '50vw'}}
                  trigger={ <Button
                      color="green" basic size="tiny"
                      loading={shareLoading}
                      style={{marginLeft: 10}} >
                    <Icon name="rss" />
                    分享
                  </Button>}
              >
                <Segment inverted>
                  <Header as="h3" textAlign="center" > 分享 </Header>
                  <Divider horizontal />
                  <div>

                    <div style={{display: "flex", marginBottom: 20}}>
                      <Input
                          style={{flex: "1 1 auto"}}
                          placeholder="请输入要分享的标题, 必填......"
                          size="mini" value={name} onChange={( event) => setName(event.target.value)} />
                      <Button
                          onClick={share}
                          floated={'right'} color="green"
                          style={{marginLeft: 10}}>分享</Button>
                    </div>
                    <StyledDescription style={{marginLeft: 0, marginBottom: 10, display: "inline-block"}}>

                      {
                          shareResult.status &&
                          <React.Fragment>
                            <a className="active" target='_blank' rel='noopener noreferrer' href={`/play/${shareResult.data.classify}/${shareResult.data.hash}`}>
                              <> <Icon name="code" /> </> 点击打开
                            </a>
                            <a className="active" target='_blank' rel='noopener noreferrer' href={`https://share.jansora.com/code/${shareResult.data.hash}`}>
                              <> <Icon name="code" /> </> 打开代码分享站点
                            </a>
                          </React.Fragment>

                      }


                    </StyledDescription>
                    <Viewer value={shareMD} />

                  </div>
                </Segment>

              </Modal>

            </div>

            <Divider horizontal>
              <StyledText>
                {result.status ? <><Icon name="circle" color="green" />远程调用成功</> : result.status===false ? <><Icon name="circle" color="red" />远程调用失败</>  : "远程调用"}
              </StyledText>
            </Divider>


            <Viewer value={md} />






          </div>
        </Grid.Column>
    </Grid>



  </StyledPageLoading>
}

export default Code;
