import React from 'react';
import styled from "styled-components";
import MaterialSearchView from "@jansora/material/es/layout/views/market/MaterialSearchView";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledWrapper = styled.div`

    display: block;
    width: 236px;
    height: 224px;
    margin: 0 auto;
    background: var(--background-color-2);
    border-radius: 8px;
    header {
      height: 156px;
      img {
        border-radius: 4px;
        width: 236px;
        height: 156px;
        background: white;
      }
        div.tags {
            width: 236px;
            //margin-bottom: -29px;
            //float: right;
            position: absolute;
            //right: 0;
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
  
  margin-bottom: 10px;
`


const Actions = (props) => {
    return <MaterialSearchView baseUrl={'codehub/action'} name={'模版'} description={"模板列表"} title={'CodeHub'} />

}

export default Actions;