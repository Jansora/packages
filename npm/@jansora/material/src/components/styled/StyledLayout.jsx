import styled from "styled-components";

const StyledLayout = styled.main`
  padding-top: var(--header-height);
  padding-left: var(--aside-width);
  padding-bottom: var(--footer-height);
  //width: calc(100vw - var(--aside-width));
  height: calc(100vh - var(--footer-height) - var(--header-height));
  
  //overflow: auto;
  
  > nav {
    width: calc(100vw - var(--aside-width) );
    transition: width 500ms;
  }
  
`

export default StyledLayout;
