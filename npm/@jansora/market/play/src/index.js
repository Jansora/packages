import React from 'react';
import MaterialPlay from "./play";
import {Route, Routes} from "react-router-dom";

const Material = () => {
    return (
        <Routes >
            <Route path="/play/*" element={<MaterialPlay />} />
        </Routes>
    )
}

export default Material;
