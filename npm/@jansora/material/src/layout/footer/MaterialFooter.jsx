import React from 'react';
import StyledFooter from "../../components/styled/StyledFooter";
import {Space} from "antd";
// import {Image} from "semantic-ui-react";
import DefaultFooter from "./DefaultFooter";

// import Header from "../header";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:28:54 <br>
 * @since 1.0 <br>
 */


const MaterialFooter = ({children}) => {

  return <StyledFooter id="footer">
    <div style={{ margin: "0 auto"}}>
      <Space
          align="center"
      >
        {
          children || <DefaultFooter />
        }
      </Space>


    </div>
  </StyledFooter>;
}

export default MaterialFooter;