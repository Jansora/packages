import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import {Compiler, FetchCode, ShareCode} from "../../../components/request/playground";
import {Viewer} from "@jansora/bytemd";
import {GlobalStore} from "../../../components/store/global";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import {Button, Divider, Grid, Icon, Input, Modal} from "@arco-design/web-react";
import {IconCode, IconShareInternal} from '@arco-design/web-react/icon';

import StyledPageLoading from "../../../components/styled/StyledLoading";
import SetDescription from "../../../components/hooks/setter/SetDescription";


/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/26 23:30:35
 */
const CompilerContainer = ({}) => {




  const {language: contextLanguage, dispatch } = useContext(GlobalStore);
  const {language: defaultLanguage, hash} = useParams();


  const [language, setLanguage] = useState(defaultLanguage);

  const [name, setName] = useState("");

  const [code, setCode] = useState(null)

  const [result, compilerLoading, setCompilerLoading] = Compiler(code, language);
  const [shareResult, shareLoading, setShareLoading] = ShareCode(code, language, name);
  const [fetchCode, setShareCode, fetchCodeLoading, setFetchCodeLoading] = FetchCode(hash, language);

  const [shareVisible, setShareVisible] = useState(false);

  // console.log("CompilerContainer", language, hash)


  // console.log("RESULT", result)

  const share = () => {
    setShareLoading(true)
  }

  useEffect(() => {
    dispatch({ type: 'language', payload: language })
  }, [language])

  useEffect(() => {

    console.log("useEffect defaultLanguage", defaultLanguage)
    if (!!defaultLanguage) {
      setLanguage(defaultLanguage)
      setFetchCodeLoading(true)
    }
  }, [defaultLanguage])

  useEffect(() => {

    if (!!fetchCode && !!fetchCode.language && !language && fetchCode.language !== language) {
      setLanguage(fetchCode.language)
    }
  }, [fetchCode, language])

  useEffect(() => {
    setCode(fetchCode.code)
  }, [fetchCode])


  const md = '```\n' + result.data + '\n```'


  SetDescription(`${fetchCode.language}`)

  const shareMD = '```' + ((contextLanguage === "node" || !contextLanguage) ? "javascript" : contextLanguage) + '\n' + code + '\n```'

  const SharePane = <Modal
    title='分享'
    visible={shareVisible}
    onOk={() => setShareVisible(false)}
    onCancel={() => setShareVisible(false)}
    style={{width: '50vw'}}
  >

    <div>

        {/*<Spin loading={shareLoading}>*/}
        {/*  /!*<Loader active inline='centered' content="分享中..."/>*!/*/}
        {/*</Spin>*/}


      <div style={{display: "flex", marginBottom: 20}}>
        <Input
            style={{flex: "1 1 auto"}}
            placeholder="请输入要分享的标题, 必填......"
            size="mini" value={name} onChange={(value) => setName(value)} />
        <Button
            // disabled={!name}
            type="primary"
            onClick={share}
            floated={'right'} color="green"
            style={{marginLeft: 10}}>分享</Button>
      </div>
      <StyledDescription style={{marginLeft: 0, marginBottom: 10, display: "inline-block"}}>

        {
          shareResult.status &&
          <a className="active" target='_blank' rel='noopener noreferrer' href={`/${shareResult.data.classify}/${shareResult.data.hash}`}>
            <> <Icon name="code" /> </> 点击打开
          </a>
        }


      </StyledDescription>
      <Viewer value={shareMD} />

    </div>
  </Modal>

  return <StyledPageLoading>
    {SharePane}
    <Grid.Row>
        <Grid.Col span={18}>

          <div style={{padding: 0}}>
            {
              code != null &&
              <CodeEditor
                force={false}
                id={"code-editor-template"}
                language={fetchCode.language === "node" ? "javascript" : fetchCode.language}
                value={code}
                onChange={setCode}
                style={{height: 650}}
              />
            }


          </div>

        </Grid.Col>
        <Grid.Col span={6}>

          <div style={{minHeight: 678}}>
            <div>
              <Button
                      type='primary'
                      icon={<IconCode />}
                      loading={compilerLoading} disabled={compilerLoading}
                      onClick={() => {setCompilerLoading(true);}}
                      style={{marginLeft: 10}} >
                运行
                </Button>

              <Button
                type='primary'
                status='success'
                icon={<IconShareInternal />}
                loading={shareLoading} disabled={shareLoading || shareVisible}
                onClick={() => {
                  setShareVisible(true)
                }}
                style={{marginLeft: 10}} >
                分享
              </Button>
            </div>

            <Divider horizontal>
              {result.status ? <div><Icon name="circle" color="green" />远程调用成功</div> : result.status===false ? <div><Icon name="circle" color="red" />远程调用失败</div>  : "远程调用"}
            </Divider>

              <Viewer value={md}/>


          </div>
        </Grid.Col>
    </Grid.Row>



  </StyledPageLoading>
}

export default CompilerContainer;
