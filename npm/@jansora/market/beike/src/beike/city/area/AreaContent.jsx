import React from 'react';
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import {Grid} from "semantic-ui-react";
import CountHouseNum from "../../components/CountHouseNum";

const AreaContent = (props) => {


    SetTitle('贝壳房价分析')

    return <React.Fragment>

        <Grid>
                <Grid.Column width={6}>
                    <CountHouseNum />
                </Grid.Column>
        </Grid>

    </React.Fragment>;
}

export default AreaContent;