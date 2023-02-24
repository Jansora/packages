import React from 'react';

import styled from "styled-components";
import FlexPadding from "../components/styled/base/FlexPadding";

const StyledMaterialLayoutHeaderCenter = styled.div`
    position: absolute;
    width: 50vw;
    margin: 0 auto;
    left: 25vw;
    display: flex;
  align-items: center;
`

const MaterialLayoutHeaderCenter = ({children}) => {
    return <StyledMaterialLayoutHeaderCenter>
        <FlexPadding />
        {children}
        <FlexPadding />
    </StyledMaterialLayoutHeaderCenter>
}

export default MaterialLayoutHeaderCenter;