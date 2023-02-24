import styled from "styled-components";

const StyledLayout = styled.main`
  margin-top: var(--header-height);
  margin-left: var(--aside-width);
  margin-bottom: var(--footer-height);
  width: calc(100vw - var(--aside-width));
  height: calc(100vh - var(--footer-height) - var(--header-height));
  
  &:has(> header) {
    //margin-top: calc(var(--header-height) + var(--layout-header-height));
    padding-top:  var(--layout-header-height);
    //height: calc(100vh - var(--footer-height) - var(--header-height) - var(--layout-header-height));
  }


  //padding-top: var(--header-height);
  //padding-left: var(--aside-width);
  //padding-bottom: var(--footer-height);
  //width: 100%;
  //height: 100%;

  //overflow-x: hidden;
  //overflow-y: auto;
  
  > section {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  > nav {
    width: calc(100vw - var(--aside-width) );
    transition: width 500ms;
  }
  
`

export default StyledLayout;
