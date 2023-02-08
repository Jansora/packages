import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseCounts} from "../../../../components/request/beike";
import {Dimmer, Loader} from "semantic-ui-react";
import StyledText from "../../../../components/styled/base/StyledText";
import ColumnChart from "./charts/ColumnChart";

const CountHouseNum = () => {

    // const navigate = useNavigate();
    // const color = GetTheme();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId} = useParams();
    const [counts, loading] = FetchHouseCounts(cityId, areaId, districtId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 二手房市场挂牌占比 (昨天) </StyledText>
        <Dimmer active={loading}>
            <Loader active={loading}/>
        </Dimmer>

        <div onC>

        </div>

        {/*<ColumnChart data={counts} x={"name"} y={"count"}  />*/}

        <ColumnChart data={counts} x={"name"} y={"count"} yLabel={"挂牌房子数量(单位：套)"} />

    </React.Fragment>;
}

export default CountHouseNum;