import React from 'react';

import {ConfigProvider} from "@arco-design/web-react";
import {BrowserRouter} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

import './init.less'

const DefaultApp = () => {

    return (
        <ConfigProvider>
            <>
                <BrowserRouter>
                    <DefaultLayout/>
                </BrowserRouter>
            </>
        </ConfigProvider>
    )

}


export default DefaultApp;
