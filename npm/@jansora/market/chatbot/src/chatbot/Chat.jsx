import React, {useState} from 'react';
// import CodeEditor from "../editor/CodeEditor";
// import DiffEditor from "../editor/DiffEditor";
import {Button, Divider, Form, Grid, Header, Icon} from "semantic-ui-react";
import {useResponsive} from 'ahooks';

import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
// import {DiffEditor} from "@jansora/monaco";
import styled from 'styled-components';
import {Chat} from "../request/chatbot";
import FlexPadding from "@jansora/material/es/components/styled/base/FlexPadding";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/26 23:30:35
 */

const StyledChatWrapper = styled.main`
  background: var(--background-color-2);
  padding: 16px;


  //height: 70vh;
  height: ${(props) => props.mobile ? "calc(100vh - var(--header-height) - var(--footer-height))" : "70vh"};
  //margin-top: calc(15vh);
  //margin-top: calc(15vh - var(--header-height) - 16px );
  margin-top: ${(props) => props.mobile ? "0" : "calc(15vh - var(--header-height) - 16px )"};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0;
  border-radius: 15px;
  
  .chatgpt-content {
    height: calc(100% - 120px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  input {
    background: var(--background-color-3) !important;
    caret-color: var(--text-color-1);
    color: var(--text-color-1) !important;
  }

  
  div.left {
    max-width: 70%;
    //margin-right: 30%;
    margin-right: calc(30% - 10px);
    margin-left: 10px;
    margin-bottom: 20px;
    align-self: flex-start;
    div.content {
      background: var(--background-color-3);
      color: var(--text-color-1);

    }
  }
  div.right {
    max-width: 70%;
    margin-left: calc(30% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
    div.content {
      //background: #11dd42;
      background: var(--primary-color);
      color: var(--light-text-color-1);
    }
    
  }
  
  div.content {
    max-width: 100%;
    padding: 6px 8px;
    min-height: 30px;
    border-radius: 8px;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-all;
    text-overflow: ellipsis;
    line-height: 27px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0;
  }
  
  div.content-wrapper {
    //width: 70%;
    width: 100%;
    display: flex;


  }
  
  
  i {
    color: var(--text-color-3)
  }
  
  

`


const Chatbot = () => {


  const color = GetColor();
  const dark = GetDarkMode();
  const responsive = useResponsive();
  const [data, setData] = useState([])

  const [inputData, setInputData] = useState("")


  const [loading, setLoading] = Chat(inputData, (response) => {
    // console.log("response", response)
    if (response && response.startsWith("\n\n")) {
      response = response.slice(2);
    }
    setInputData("")
    setData(data.concat({
      role: "robot",
      message: response
    }))

    setTimeout(() => {
      document.getElementById("location").scrollIntoView()
    }, 100)

  })

  const onSave = (args) => {

    setLoading(true)

    setData(data.concat({
      role: "user",
      message: inputData,
    }))

  }


  const mobile = !responsive.middle

  return <StyledPageLoading>

    <Grid>

      {
        !mobile &&  <Grid.Column width={4} />
      }

      <Grid.Column width={mobile ? 16 :8} style={{padding: mobile ? "0" : "16px"}}>

        <StyledChatWrapper mobile={mobile}>

          <Header textAlign="center" as="h3" inverted={dark}> {loading ? "正在输入...": "Chatbot (OpenAI)"} </Header>

          <Divider />

          <div className="chatgpt-content">

            {
              data.map((item, index) => {

                const robot = item.role === "robot";
                return <div className={robot ? "left" : "right"} key={index}>
                  <div className={"content-wrapper"}>
                    { !robot && <FlexPadding/>}
                    <div className={"content"}>
                      {item.message}
                    </div>
                    { robot && <FlexPadding/>}
                  </div>
                </div>
              })
            }


            <div id="location"></div>
          </div>
          <Divider  />
          <div className="chatgpt-input">
              <Form  inverted={dark}  onSubmit={onSave}>
                <Form.Input
                    loading={loading}
                    disabled={loading}
                    value={inputData}
                    onChange={(event, value) => setInputData(value.value)}
                    placeholder='Hi! You can ask me anything.'
                    icon
                >
                  <input />
                  <Icon name="search" />
                </Form.Input>
                <Button style={{display: "none"}} />
              </Form>
          </div>

        </StyledChatWrapper>
      </Grid.Column>

    </Grid>



  </StyledPageLoading>
}

export default Chatbot;
