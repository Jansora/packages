import React from 'react';

import {ConfigProvider} from "@arco-design/web-react";
import {BrowserRouter} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

import GlobalStoreProvider from "@jansora/global";
import {configResponsive} from "ahooks";


import "@arco-design/web-react/dist/css/arco.css";

import './init.less'

// import "@arco-design/web-react/es/style/theme/color/colors.less";
// import "@arco-design/web-react/es/style/theme/color/css-variables.less";
import './arco-palette.less'

configResponsive({
    small: 0,
    middle: 800,
    large: 1600,
    huge: 2000,
});

const DefaultApp = () => {

    return (
        <ConfigProvider>
            <GlobalStoreProvider>
                <BrowserRouter>
                    <DefaultLayout/>
                </BrowserRouter>
            </GlobalStoreProvider>
        </ConfigProvider>
    )

}


export default DefaultApp;
