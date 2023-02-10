import React from 'react';
import {BrowserRouter} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

import GlobalStoreProvider from "@jansora/global";
import {configResponsive} from "ahooks";

import './components/styled/css/semantic.css';

// import "@arco-design/web-react/dist/css/arco.css";
// import 'antd/dist/antd.css'
// import 'antd/dist/antd.dark.css';
import '@jansora/global/lib/theme.less'
import '@jansora/global/lib/color.less'

import './init.less'


import Mount from "@jansora/global/es/mount";

// import "@arco-design/web-react/es/style/theme/color/colors.less";
// import "@arco-design/web-react/es/style/theme/color/css-variables.less";
// import './arco-palette.less'

configResponsive({
    small: 0,
    middle: 800,
    large: 1600,
    huge: 2000,
});

const DefaultApp = () => {

    return (
            <GlobalStoreProvider>
                <BrowserRouter>
                    <Mount />
                    <DefaultLayout/>
                </BrowserRouter>
            </GlobalStoreProvider>
    )

}


export default DefaultApp;
