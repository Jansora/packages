import React from 'react';
import {Route, Routes} from "react-router-dom";

import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import Chatbot from "./Chat";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/4 09:55:14 <br>
 * @since 1.0 <br>
 */


const MaterialChatbot = () => {

    SetTitle('chatbot聊天机器人 ')
    return <React.Fragment>

        <Routes>
            <Route path="/" element={<Chatbot />} />
        </Routes>


    </React.Fragment>;

}

export default MaterialChatbot;