import React, {useState} from 'react';
// import CodeEditor from "../editor/CodeEditor";
// import DiffEditor from "../editor/DiffEditor";
import {Button, Comment, Divider, Form, Grid, Header} from "semantic-ui-react";

import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
// import {DiffEditor} from "@jansora/monaco";
import styled from 'styled-components';
import {Chat} from "../request/chatbot";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/26 23:30:35
 */

const StyledChatWrapper = styled.main`
  background: var(--background-color-2);
  padding: 16px;
  height: 70vh;
  margin-top: calc(15vh - var(--header-height));
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0;
  border-radius: 15px;
  
  .chatgpt-content {
    height: calc(100% - 150px);
    overflow-y: auto;
    
 
  }
  input {
    background: var(--background-color-3) !important;
    caret-color: var(--text-color-1);
    color: var(--text-color-1) !important;
  }
  
  div.left {
    width: 70%;
  }
  div.right {
    width: 70%;
    float: right;
  }
`


const Chatbot = () => {


  const color = GetColor();
  const dark = GetDarkMode();

  const [data, setData] = useState([1,2,3])

  const [inputData, setInputData] = useState("")


  const [loading, setLoading] = Chat(inputData, (response) => {
    console.log("response", response)
  })

  const onSave = (args) => {

    console.log("ref", args)

    setLoading(true)
    setInputData("")

  }

  console.log("x", inputData)


  return <StyledPageLoading>

    <Grid>
      <Grid.Column width={4}>



      </Grid.Column>

      <Grid.Column width={8}>

        <StyledChatWrapper>

          <Header textAlign="center" as="h3" inverted={dark}> ChatGPT bot </Header>

          <Divider />

          <div className="chatgpt-content">
            <Comment.Group inverted={dark}>
            {
              data.map((item, index) => {
                return <div className={item.role === "robot" ? "left" : "right"} key={index}>
                  <Comment inverted={dark}>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a' inverted={dark}>Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>How artistic!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </div>
              })
            }
              </Comment.Group>


          </div>
          <Divider />
          <div className="chatgpt-input">
              <Form loading={loading} inverted={dark}  onSubmit={onSave}>
                <Form.Input
                    value={inputData}
                    onChange={(event, value) => setInputData(value.value)}
                    placeholder='Full name'>

                  {/*<input />*/}
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
