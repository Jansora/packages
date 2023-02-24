import React from 'react';
import {BrowserRouter} from "react-router-dom";

import GlobalStoreProvider from "@jansora/global";
import {configResponsive} from "ahooks";
import {message} from 'antd';

// import './components/styled/css/semantic.css';
import '@jansora/global/lib/theme.less'
import '@jansora/global/lib/color.less'

import 'magic.css/dist/magic.min.css'
import './init.less'


import MountGlobal from "@jansora/global/es/mount";
import MaterialAppContent from "./MaterialAppContent";
import DefaultLayout from "./layout/DefaultLayout";


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

const MaterialApp = ({children}) => {

    return (
        <GlobalStoreProvider>
            <BrowserRouter>
                <MountGlobal />
                <MaterialAppContent>
                    {
                        children || <DefaultLayout/>
                    }
                </MaterialAppContent>
            </BrowserRouter>
        </GlobalStoreProvider>
    )

}


export default MaterialApp;
