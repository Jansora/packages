import React from 'react';
import {theme} from "antd";
import StyledLayout from "../components/styled/StyledLayout";

const { defaultAlgorithm, darkAlgorithm } = theme;

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const MaterialLayout = ({children}) => {



  return <StyledLayout>
      {
          children
      }
  </StyledLayout>
  ;
}

export default MaterialLayout;