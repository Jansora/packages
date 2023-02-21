import React from 'react';
import MaterialNotebook from "./notebook";
import {Route, Routes} from "react-router-dom";

const Material = () => {
    return (
        <Routes >
            <Route path="/notebook/*" element={<MaterialNotebook />} />
        </Routes>
    )
}

export default Material;
