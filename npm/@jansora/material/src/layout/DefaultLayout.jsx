import React from 'react';
import Header from "./header";
import StyledLayout from "../components/styled/StyledLayout";
// import Footer from "./footer";
import Aside from "./aside";
import {BrowserRouter} from "react-router-dom";
import Mount from "@jansora/global/lib/mount";

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



  return <BrowserRouter>
    <Mount />
    <Header />
    <Aside />
    <StyledLayout id="layout">
111
    </StyledLayout>
    {/*<Footer>*/}
    {/*</Footer>*/}
  </BrowserRouter>;
}

export default DefaultLayout;