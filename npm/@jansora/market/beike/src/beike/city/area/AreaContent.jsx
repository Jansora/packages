import React from 'react';

import {Routes, useLocation, useNavigate} from "react-router-dom";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import {Grid} from "semantic-ui-react";
import CountHouseNum from "../../components/CountHouseNum";

const AreaContent = (props) => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();

    SetTitle('贝壳房价分析')

    return <React.Fragment>

        <Grid>
                <Grid.Column width={6}>
                    <CountHouseNum />
                </Grid.Column>


        </Grid>


        <Routes>
            {/*<Redirect from="/notebook" to="/notebook/ls" exact={true} />*/}
            {/*<Route path=":city/*" element={<Component  />} />*/}
            {/*<Route path="action/*" element={<Action  />} />*/}

        </Routes>

    </React.Fragment>;
}

export default AreaContent;