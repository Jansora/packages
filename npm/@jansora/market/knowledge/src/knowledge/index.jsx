import React from 'react';

import {Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Notes from "./notes";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import Note from "./note";
import SaveNote from "./SaveNote";
import {Grid, Menu} from "semantic-ui-react";
import MaterialContainerContent from "@jansora/material/es/components/view/container/MaterialContainerContent";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import MaterialContainer from "@jansora/material/es/components/view/container/MaterialContainer";
import MaterialContainerHeader from "@jansora/material/es/components/view/container/MaterialContainerHeader";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const MaterialKnowledge = (props) => {
    const {pathname} = useLocation();
    const color = GetColor();
    const dark = GetDarkMode();

    SetTitle('知识图谱')

    return <React.Fragment>

        {pathname === '/knowledge' && <Navigate replace={true} to="/knowledge/ls" />}

        <MaterialContainer>
            <MaterialContainerHeader
                left={
                    <>
                        <Menu inverted={dark} size="mini" style={{margin: "0"}}>
                            <Menu.Item as={Link} to={}>变量</Menu.Item>
                        </Menu>
                    </>
                }

            >

            </MaterialContainerHeader>
            <MaterialContainerContent>
                <StyledPageLoading>

                    <Grid>

                        <Grid.Column width={7}>
                        </Grid.Column>
                    </Grid>



                </StyledPageLoading>
            </MaterialContainerContent>
        </MaterialContainer>

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

export default MaterialKnowledge;