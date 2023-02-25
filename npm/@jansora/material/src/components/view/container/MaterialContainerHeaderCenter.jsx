import React from 'react';

import styled from "styled-components";
import FlexPadding from "../../../components/styled/base/FlexPadding";

const StyledMaterialContainerHeaderCenter = styled.div`
    //position: absolute;
    width: 20%;
    margin: 0 auto;
    left: 25%;
    display: flex;
    align-items: center;
`

const MaterialContainerHeaderCenter = (props) => {
    const style = props.style ? props.style : {};
    return <StyledMaterialContainerHeaderCenter style={style}>
        <FlexPadding />
        {props.children}
        <FlexPadding />
    </StyledMaterialContainerHeaderCenter>
}

export default MaterialContainerHeaderCenter;