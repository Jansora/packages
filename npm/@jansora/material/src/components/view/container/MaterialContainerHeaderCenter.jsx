import React from 'react';

import styled from "styled-components";
import FlexPadding from "../../../components/styled/base/FlexPadding";

const StyledMaterialContainerHeaderCenter = styled.div`
    //position: absolute;
    width: 50%;
    margin: 0 auto;
    left: 25%;
    display: flex;
    align-items: center;
`

const MaterialContainerHeaderCenter = ({children}) => {
    return <StyledMaterialContainerHeaderCenter>
        <FlexPadding />
        {children}
        <FlexPadding />
    </StyledMaterialContainerHeaderCenter>
}

export default MaterialContainerHeaderCenter;