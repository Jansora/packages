import React from 'react';
import {BrowserRouter} from "react-router-dom";

import GlobalStoreProvider from "@jansora/global";
import {configResponsive} from "ahooks";
import {message} from 'antd';

import './components/styled/css/semantic.css';

// import "@arco-design/web-react/dist/css/arco.css";
// import 'antd/dist/antd.css'
// import 'antd/dist/antd.dark.css';
import '@jansora/global/lib/theme.less'
import '@jansora/global/lib/color.less'

import './init.less'


import MountGlobal from "@jansora/global/es/mount";
import Layout from "./layout/Layout";

// import "@arco-design/web-react/es/style/theme/color/colors.less";
// import "@arco-design/web-react/es/style/theme/color/css-variables.less";
// import './arco-palette.less'

configResponsive({
    small: 0,
    middle: 800,
    large: 1600,
    huge: 2000,
});

message.config({
    top: 50,
    // right: 0,
    duration: 2,
    maxCount: 3,
    rtl: true,
    prefixCls: 'ant-custom-message',
});

const App = ({children}) => {

    return (
        <GlobalStoreProvider>
            <BrowserRouter>
                <MountGlobal />
                <Layout>
                    {children}
                </Layout>
            </BrowserRouter>
        </GlobalStoreProvider>
    )

}


export default App;
