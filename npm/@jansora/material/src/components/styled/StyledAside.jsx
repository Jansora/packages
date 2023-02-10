/*
* @file header.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2020-12-05 10:21
*/

import styled from "styled-components";

const StyledAside = styled.nav`
  position: fixed;
  top: calc(var(--header-height) + 2px);
  //top: 0;
  bottom: calc(var(--footer-height) + 2px);
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-1);
  z-index: 1001;
  width: var(--aside-width);
  //height: 100vh;
  //height: calc(100vh - var(--header-height) - 2px);
  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
  //box-shadow: 0 0 6px 0 rgba(0,0,0,.1);
  
  div.logo {
    height: 32px;
  }
  
  svg {
    margin: 11px 15px 0 7px;
    font-size: 20px;
  }
  
  div.arco-divider-horizontal {
    margin: 10px 0;
  }
  
  div.icon {

    width: 32px;
    height: 32px;
    margin-right: 10px;
    line-height: 100%;
    display: inline-block;
  }
  
  >label {
    display: block;
    height: 32px;

    color: var(--text-color-3);
    padding: 10px 8px 5px 13px;

    font-size: 13px;
    user-select:none;
    line-height: 21px;
  }
  >a {
      padding: 0 0 0 9px;
      //margin-right: 10px;
      user-select: none;
      line-height: var(--header-height);
      height: calc(var(--header-height) + 0px);
      color: var(--text-color-2);
      overflow: hidden;
      i {
        font-size: 20px;
        margin: 0 12px 0 5px;
      }
      span {
      //display: inline-block;
      //      height: var(--header-height);
      //padding-bottom: 10px;

      }
      display: flex;
      //background-color: @color-bg-2;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: var(--background-color-4);
  }
  >a:hover {
    box-shadow: none;
    color: var(--primary-color);
    //border-color: #1b1c1d;
    font-weight: 500;
    background-color: var(--background-color-6);
    border-right-width: 2px;
    border-right-style: solid;
    //border-right-color: @primary-1;
    
    //border-bottom-width: 1px;
    //border-bottom-style: solid;
    //border-bottom-color: @primary-1;
  }
  >a.active {
    box-shadow: none;
    //border-color: #1b1c1d;
    //font-weight: 700;
    //background-color: var(--active-backgroud-color);

    border-right-width: 2px;
    border-right-style: solid;
    //border-right-color: var(--primary-color);
    //transition: border-bottom 500ms;
  }

  &:hover {
    width: var(--active-aside-width);
    img {
      width: calc(var(--active-aside-width) - 12px );
    }
  }
  div.ui.divider {
    margin: 5px 0;
  }
  transition: width 500ms;
`;

export default StyledAside;

