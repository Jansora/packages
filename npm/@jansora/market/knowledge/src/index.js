import React from 'react';
import MaterialKnowledge from "./knowledge";
import {Route, Routes} from "react-router-dom";

const Knowledge = () => {
    return (
        <Routes >
            <Route path="/knowledge" element={<MaterialKnowledge />} />
        </Routes>
    )
}

export default Knowledge;
