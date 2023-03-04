import React from 'react';
import {Route, Routes} from "react-router-dom";
import MaterialChatbot from "./chatbot";

const Material = () => {
    return (
        <Routes >
            <Route path="/*" element={<MaterialChatbot />} />
        </Routes>
    )
}

export default Material;
