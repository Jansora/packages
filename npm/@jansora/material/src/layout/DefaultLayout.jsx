import React from 'react';
import StyledLayout from "../components/styled/StyledLayout";
import MaterialAside from "./aside/MaterialAside";
import MaterialHeader from "./header/MaterialHeader";
import MaterialFooter from "./footer/MaterialFooter";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const DefaultLayout = () => {

  return <React.Fragment>
    <MaterialHeader />
    <MaterialAside />
    <StyledLayout id="layout">

    </StyledLayout>
    <MaterialFooter/>
  </React.Fragment>;
}

export default DefaultLayout;