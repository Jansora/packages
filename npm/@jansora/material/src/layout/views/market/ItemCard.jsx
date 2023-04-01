import React from "react";
// import StyledIconFont from "../../styled/StyledIconFont";
import {Tooltip} from "antd";
// import StyledDescription from "../../styled/base/StyledDescription";
import styled from "styled-components";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import {Link} from "react-router-dom";


const StyledWrapper = styled.div`

    display: block;
    width: 256px;
    height: 224px;
    margin: 0 auto;
    background: var(--background-color-2);
    border-radius: 8px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
    header {
      height: 156px;
      img {
        border-radius: 4px;
        width: 256px;
        height: 156px;
        background: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    section {
      margin: 12px 16px 4px;
      span {
        //flex: 1 1 auto;
        //font-size: 1rem;
        width: 100%;
        height: 20px;
        font-weight: 500;
        color: var(--text-color-2);
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
    
      }
      overflow-x: hidden;
    }
  
    footer {  
      overflow-x: hidden;
      text-overflow:ellipsis; //溢出用省略号显示
      white-space:nowrap; //溢出不换行
      line-height: 1.5;
      -webkit-line-clamp:2;
      margin: 4px 16px 12px;
    }
  
  //margin-bottom: 10px;
`


const ItemCard = ({data}) =>

    <div>
        <StyledWrapper>
            <header>
                <Link to={`${data.link}`} rel="noreferrer"  target="_blank">
                    <Tooltip placement="bottom" title={data.description}>
                        <img src={data.logo} alt={data.title}/>
                    </Tooltip>
                </Link>
            </header>
            <section>
                <Link to={`${data.link}`} rel="noreferrer"  target="_blank">
                    <Tooltip placement="bottom" title={data.name}>
                        <span title={data.name} >{data.name}</span>
                    </Tooltip>
                </Link>
            </section>
            <footer>
                <Tooltip placement="bottom" title={data.updatedAt}>
                    <StyledDescription>
                        {data.description}
                    </StyledDescription>
                </Tooltip>
            </footer>

        </StyledWrapper>
    </div>





export default ItemCard;