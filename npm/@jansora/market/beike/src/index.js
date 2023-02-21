import React from 'react';
import MaterialBeike from "./beike";
import {Route, Routes} from "react-router-dom";

const Beike = () => {
    return (
        <Routes >
            <Route path="/beike/*" element={<MaterialBeike />} />
        </Routes>
    )
}

export default Beike;
