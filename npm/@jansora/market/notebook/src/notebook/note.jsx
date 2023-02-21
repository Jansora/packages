import React, {useEffect, useState} from 'react';
import {DeleteNote, FetchNote} from "../request/notebook";
import {Link, useNavigate, useParams} from 'react-router-dom';
// import {Viewer} from "../../../components/editor/md-editor/bytemd";
import {Viewer} from "@jansora/bytemd/lib/index";
import {Anchor, message, Popconfirm} from "antd";
import {useResponsive} from "ahooks";


import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import GetUser from "@jansora/material/es/hooks/getter/GetUser";
import {Button, Grid} from "semantic-ui-react";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";


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

  return <StyledPageLoading>


    <Grid columns='equal'  id="notebook-note">
      {
        responsive.large &&  <Grid.Column />
      }

      <Grid.Column width={responsive.middle ? 9 : 16} >
          <Viewer value={note.raw} />
      </Grid.Column>
      {/*{*/}
      {/*  responsive.large &&  <Grid.Column />*/}
      {/*}*/}
      {
          responsive.middle &&
          <Grid.Column width={4}>
            <div style={{float: 'right', position: "fixed"}}>

              {
                  user.id === note.userId && <React.Fragment>
                    <div style={{marginBottom: 29}}>
                      <Link to={`/notebook/${note.id}/edit`} style={{marginRight: 30}}><Button color={color}
                                                                                               inverted={GetDarkMode()}> 编辑 </Button></Link>
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
                        <Button color={"red"}> 删除 </Button>
                      </Popconfirm>

                    </div>
                  </React.Fragment>
              }
              {/*<CustomLabel> 文章大纲 </CustomLabel>*/}
              <Anchor >
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
    </Grid>



  </StyledPageLoading>;
}

export default Note;
