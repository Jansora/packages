/*
* @file PostItem.jsx
* @author jansora
* @date 2020/2/12
*/


import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {StyledDescription} from "../../components/styled/common";
import * as moment from "moment";
import {Label} from "semantic-ui-react";
import GetTheme from "../../components/hooks/GetTheme";
import * as zhCn from 'moment/locale/zh-cn';
import {useResponsive} from "ahooks";

moment.locales(zhCn)

const Wrapper = styled.div`
  width: 100%;
  height: 136px;
  display: flex;
  border-top: 1px solid rgb(186, 186, 186);
  border-bottom: 1px solid rgb(186, 186, 186);
  background-color: ${props => props.enabled ? "none" : "var( --active-backgroud-color)"};
  div.main{
      width: 100%;
      padding: 10px 20px;
      a.title {
          color: black;
          font-size: 18px;
          font-weight: bolder;
      }
      p.description {
          color: rgba(0, 0, 0, 0.54);
          font-size: 14px;
          height: 48px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 10px 0;
          white-space: pre-line;
      } 
   }
  div.bottom{
    
   
  }
  div.logo {
      width: 235px;
      margin: 10px;
      border-radius: 12px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(${props => props.img});
  }

`

const NodeListItem = (props) => {
    const { item, setTag } = props;
    const theme = GetTheme();
  const responsive = useResponsive();

  return (
        <Wrapper img={item.logo} enabled={item.enabled}>
          {
            responsive.middle && <div className="logo" />
          }

            <div className="main">
              <Link to={`/action/${item.id}`} className="title">{item.name}</Link>
                <p className="description">{item.description}</p>
                <div className="bottom">
                  {
                    item.tag &&
                    item.tag.split(",").filter(t => !!t).map(tag =>
                        <Label
                            color={theme}
                            onClick={()=> setTag && setTag(tag)}
                            as="a" key={tag}  >{tag}</Label>)
                  }

                  <StyledDescription> {moment(item.updatedAt).fromNow()}</StyledDescription>

                </div>
            </div>


        </Wrapper>
    )
}

export default NodeListItem;
