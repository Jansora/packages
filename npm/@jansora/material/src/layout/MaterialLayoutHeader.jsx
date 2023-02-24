import React from 'react';
import styled from "styled-components";
import {Input} from "semantic-ui-react";
import MaterialLayoutHeaderCenter from "./MaterialLayoutHeaderCenter";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledMaterialLayoutHeader = styled.header`
    //position: fixed;
    top: var(--header-height);
    left: var(--aside-height);
    margin-top: calc(0px - var(--layout-header-height));
    height: var(--layout-header-height);
    //width: 100%;
    width: calc(100vw - var(--aside-width));
    background-color: var(--background-color-2);
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);

    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
    border-bottom: 1px solid rgba(0,0,0,.1);
    line-height: 20px;
    padding: 6px 32px;
    //z-index: 1980;
  
  
    display: flex;
    align-items: center;
  
    .left {
      
    }
   .right {
     float: right;
   }
`


const MaterialLayoutHeader = ({children}) => {


    return <StyledMaterialLayoutHeader>
        <MaterialLayoutHeaderCenter>
            <Input size="mini" styled={{height: 20}} />
        </MaterialLayoutHeaderCenter>
        {children}
    </StyledMaterialLayoutHeader>;
}

export default MaterialLayoutHeader;