import React, {useEffect, useState} from 'react';
import {DeleteNote, FetchNote, ShareNote} from "../request/notebook";
import {Link, useNavigate, useParams} from 'react-router-dom';
// import {Viewer} from "../../../components/editor/md-editor/bytemd";
import {Viewer} from "@jansora/bytemd/lib/index";
import {Anchor, Divider, message, Popconfirm} from "antd";
import {useResponsive} from "ahooks";


import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import GetUser from "@jansora/material/es/hooks/getter/GetUser";
import {Button, Grid, Icon, Menu} from "semantic-ui-react";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import MaterialContainerContent from "@jansora/material/es/components/view/container/MaterialContainerContent";
import MaterialContainer from "@jansora/material/es/components/view/container/MaterialContainer";
import MaterialContainerHeader from "@jansora/material/es/components/view/container/MaterialContainerHeader";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import StyledA from "@jansora/material/es/components/styled/StyledA";
// import copy from 'copy-to-clipboard';


/**
 * <Description> <br>
 * @author zhang.yangyuan (jansora)
 2020/12/05 22:21:26
 */



const Note = (props) => {
  const { id } = useParams();

  const color = GetColor();
  const user = GetUser();

  const [note] = FetchNote(id)

    const [showAnchor, setShowAnchor] = useState(true);
  const [Anchors, setAnchors] = useState([]);

  SetDescription(note.name)

  const navigate = useNavigate();
  const responsive = useResponsive();

  const updateToc = () => {
    setTimeout(() => {
      const article = document.querySelector(".markdown-body");
      if(null == article || article.hasAttribute("querySelectorAll")) return;
      const hs = article.querySelectorAll("h1,h2,h3,h4");
      const Anchor = [];

      hs.forEach((item, index) => {
        const h = item.nodeName.substr(0, 2).toLowerCase()
        item.id = `Anchor-${h}-${index}`;
        Anchor.push({id: `Anchor-${h}-${index}`, text: item.textContent});
      })
      setAnchors(Anchor)
    }, 100);
  }

  useEffect(() => {
    updateToc()
  }, [note])

  return <MaterialContainer>
      <MaterialContainerHeader
          leftStyle={{}}
          centerStyle={{}}
          rightStyle={{}}
          left={<React.Fragment>
            <StyledDescription style={{marginRight: 5}}>目录: </StyledDescription>

            <Menu inverted={GetDarkMode()} size="mini" style={{margin: "0"}}>
              {
                [{name: "显示", value: true},{name: "隐藏", value: false}].map((item, index) =>
                    <Menu.Item key={index} onClick={() => setShowAnchor(item.value)} active={item.value === showAnchor} color={item.value === showAnchor ? color : null}>
                      <StyledText>{item.name}</StyledText>
                    </Menu.Item>
                )
              }
            </Menu>
            <Divider type="vertical"  />

              <StyledDescription> {note.description}</StyledDescription>
          </React.Fragment>
          }
          center={
            <React.Fragment>
                {note.title}
            </React.Fragment>
          }
          right={
              user.id === note.userId && <React.Fragment>
                  <Popconfirm
                      title='你确认要分享吗？'
                      onConfirm={() => {
                          ShareNote(note.id, (response) => {
                              message.success({content: <span>分享成功 <StyledA href={response}> <>点击打开</>  </StyledA></span>});
                          })
                      }}
                      onCancel={() => {
                          // message.error({ content: 'cancel' });
                      }}
                  >
                      <Button icon size="mini" color={color}>
                          <Icon name='share' />
                      </Button>
                  </Popconfirm>

                <Divider type="vertical"  />

                <Button icon size="mini" color={color} as={Link} to={`/notebook/${note.id}/edit`}>
                  <Icon name='edit' />
                </Button>

                  <Divider type="vertical"  />
                  <Popconfirm
                      title='你确认要删除吗？'
                      onConfirm={() => {
                          message.success({content: '删除成功'});
                          DeleteNote(note.id, () => navigate("/notebook"))
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
          />

         <MaterialContainerContent>
             <StyledPageLoading>

    <Grid columns='equal'  id="notebook-note">
      {
        responsive.middle &&  <Grid.Column />
      }

      <Grid.Column width={responsive.middle ? (showAnchor ? 9 : 11) : 16} >
          <Viewer value={note.raw} />
      </Grid.Column>
      {
          responsive.middle && showAnchor &&
          <Grid.Column width={3}>

            <div style={{float: 'right', position: "fixed", overflowY: "auto"}}>

                <StyledText> 文章大纲 </StyledText>
                <Divider style={{margin: "10px 0 15px 0"}}/>
              <Anchor
              >
                {
                  Anchors.map((anchor, index) => {

                    if (anchor.id[8] === "1") {
                      return <Anchor.Link key={index} href={`#${anchor.id}`} onClick={e => e.preventDefault()}
                                          title={<span style={{paddingLeft: 0}} >{anchor.text}</span>}/>
                    }
                    if (anchor.id[8] === "2") {
                      return <Anchor.Link  key={index} href={`#${anchor.id}`} onClick={e => e.preventDefault()}
                                          title={<span style={{paddingLeft: 16}} >{anchor.text}</span>}/>
                    }
                    if (anchor.id[8] === "3") {
                      return <Anchor.Link key={index} href={`#${anchor.id}`} onClick={e => e.preventDefault()}
                                          title={<span style={{paddingLeft: 32}} >{anchor.text}</span>}/>
                    }
                    return <></>
                    // return <SubItem key={anchor.id} onClick={() => goto(anchor.id)} > <Icon name="dot circle outline" /> {anchor.text} </SubItem>
                  })
                }
              </Anchor>
            </div>

          </Grid.Column>
      }
        {
            responsive.middle &&  <Grid.Column />
        }
    </Grid>



  </StyledPageLoading>

</MaterialContainerContent>
</MaterialContainer>;
}

export default Note;
