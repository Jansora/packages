import styled from "styled-components";

const StyledHeader = styled.header`
  
  z-index: 1000;
  padding: 0 24px 0 10px;
  height: var(--header-height);
  background-color: var(--background-color-1);
  position: fixed;
  top: 0;
  left: var(--aside-width);
  right: 0;
  display: flex;
  align-items: center;

  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
  a {
    //margin-right: 10px;
  }
  div.padding {
    flex: 1 1 auto;
  }
  
  div.logo {
    
  }
  
  svg {
    height: calc(var(--header-height) - 16px);
    margin-top: 6px;
    cursor: pointer;
  }
`

export default StyledHeader;
