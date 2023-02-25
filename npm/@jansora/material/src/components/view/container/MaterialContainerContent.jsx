import React from "react";
import styled from "styled-components";


// const styledAside = styled.nav`


const StyledContainerContent = styled.main`
    height: 100%;
`

const MaterialContainerContent = ({children}) => {
    return <StyledContainerContent>
            {children}
    </StyledContainerContent>


}

export default MaterialContainerContent;