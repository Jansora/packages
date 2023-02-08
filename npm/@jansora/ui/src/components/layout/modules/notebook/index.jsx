import React from 'react';

import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Notes from "./notes";
import SetTitle from "../../../components/hooks/setter/SetTitle";
import Note from "./note";
import SaveNote from "./SaveNote";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const Notebook = (props) => {
    const {pathname} = useLocation();

    SetTitle('闲文杂记')

    return <React.Fragment>

        {pathname === '/notebook' && <Navigate replace={true} to="/notebook/ls" />}


        {/*<Navigate replace={true} to="/notebook/ls" />*/}
        <Routes>
            {/*<Redirect from="/notebook" to="/notebook/ls" exact={true} />*/}
            <Route path="new" element={<SaveNote  />} />

            <Route path="ls" element={<Notes  />} />
            <Route path=":id" element={<Note  />} />
            <Route path=":id/edit" element={<SaveNote  />} />
        </Routes>

    </React.Fragment>;
}

export default Notebook;