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
    height: ${props => props.height ? props.height : 'calc(100% - var(--layout-header-height))'};;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  display: flex;
  flex-direction: column;

  height: ${props => props.height ? props.height : 'calc(100% - var(--layout-header-height))'};;
  
`


const MaterialContainerContent = styled.main`
    //height: 100%;
`

const MaterialContainer = (props) => {
    console.log("bbxc", props)
    const style = props.style ? props.style : {};
    return <StyledContainer style={style}>
            {props.children}
    </StyledContainer>


}

export default MaterialContainer;