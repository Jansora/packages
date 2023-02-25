import React from "react";
import styled from "styled-components";


const StyledContainer = styled.main`
  
  //margin-top: var(--header-height);
  //margin-left: var(--aside-width);
  //margin-bottom: var(--footer-height);
  
  &:has(> header) {
    padding-top:  var(--layout-header-height);
  }
  
  > main {
   
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  height: calc(100%);
  display: flex;
  flex-direction: column;
  
  
`


const MaterialContainer = (props) => {
    const style = props.style ? props.style : {};
    return <StyledContainer style={style}>
            {props.children}
    </StyledContainer>


}

export default MaterialContainer;