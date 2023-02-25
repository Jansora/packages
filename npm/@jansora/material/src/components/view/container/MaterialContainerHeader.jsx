import React from "react";
import styled from "styled-components";
import MaterialContainerHeaderCenter from "./MaterialContainerHeaderCenter";

const StyledMaterialContainerHeader = styled.header`

  margin-top: calc(0px - var(--layout-header-height));
  height: var(--layout-header-height);
  
  background-color: var(--background-color-2);
  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);

  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  border-bottom: 1px solid rgba(0,0,0,.1);
  line-height: 20px;
  padding: 6px 32px;

  display: flex;
  align-items: center;

  .left {

  }
  .right {
    float: right;
  }
`


const MaterialContainerHeader = ({ left, center, right }) => {
    return <StyledMaterialContainerHeader>

        <div className="left">{left}</div>
        {/*<FlexPadding></FlexPadding>*/}
        <MaterialContainerHeaderCenter>
            {center}
        </MaterialContainerHeaderCenter>
        <div className="right">{right}</div>

    </StyledMaterialContainerHeader>


}

export default MaterialContainerHeader;