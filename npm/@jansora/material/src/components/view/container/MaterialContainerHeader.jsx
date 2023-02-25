import React from "react";
import styled from "styled-components";
import MaterialContainerHeaderCenter from "./MaterialContainerHeaderCenter";
import FlexPadding from "../../styled/base/FlexPadding";

const StyledMaterialContainerHeader = styled.header`

  margin-top: calc(0px - var(--layout-header-height));
  height: var(--layout-header-height);
  
  background-color: var(--background-color-2);
  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);

  //font-size: 14px;
  //font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  border-bottom: 1px solid rgba(0,0,0,.1);
  //line-height: 20px;
  padding: 6px 16px;

  display: flex;
  align-items: center;

  .container-left {
    min-width: 100px;
    display: flex;
    align-items: center;
  }
  .container-right {
    float: right;
    min-width: 100px;
    display: flex;
    align-items: center;
  }
`


const MaterialContainerHeader = (props) => {
    const style = props.style ? props.style : {};
    const leftStyle = props.leftStyle ? props.leftStyle : {};
    const centerStyle = props.centerStyle ? props.centerStyle : {};
    const rightStyle = props.rightStyle ? props.rightStyle : {};
    const left = props.left ? props.left : <React.Fragment/>;
    const center = props.center ? props.center : <React.Fragment/>;
    const right = props.right ? props.right : <React.Fragment/>;
    return <StyledMaterialContainerHeader style={style}>
        <div className="container-left" style={leftStyle}>{left}</div>
        {
            center &&  <MaterialContainerHeaderCenter centerStyle={centerStyle}>
                {center}
            </MaterialContainerHeaderCenter>
        }

        <div className="container-right" style={rightStyle}>
            <FlexPadding />
            {right}
        </div>

    </StyledMaterialContainerHeader>


}

export default MaterialContainerHeader;