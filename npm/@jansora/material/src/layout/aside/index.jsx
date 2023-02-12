import React from 'react';


import {useResponsive} from 'ahooks';
import StyledAside from "../../components/styled/StyledAside";
import DefaultAside from "./DefaultAside";


const Aside = ({children}) => {

  const responsive = useResponsive();

  return <StyledAside responsive={responsive} >
    {
      children || <DefaultAside />
    }
  </StyledAside>

}

export default Aside;
