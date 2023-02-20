import React from 'react';
import MaterialCodeHub from "./codehub/index";
import {Route, Routes} from "react-router-dom";

const CodeHub = () => {
    return (
        <Routes >
            <Route path="/codehub/*" element={<MaterialCodeHub />} />
        </Routes>
    )
}

export default CodeHub;
