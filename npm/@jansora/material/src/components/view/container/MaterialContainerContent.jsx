import React from "react";
import styled from "styled-components";


// const styledAside = styled.nav`


const StyledContainerContent = styled.main`
    height: 100%;
`

const MaterialContainerContent = (props) => {
    const style = props.style ? props.style : {};
    return <StyledContainerContent style={style}>
            {props.children}
    </StyledContainerContent>


}

export default MaterialContainerContent;