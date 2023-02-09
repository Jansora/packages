import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseTotalPriceTimelines} from "../../../../components/request/beike";
import {Dimmer, Loader} from "semantic-ui-react";
import StyledText from "../../../../components/styled/base/StyledText";
import MultiLineChart from "./charts/MultiLineChart";

const CountHouseTotalPriceTimeline = () => {

    // const navigate = useNavigate();
    // const color = GetTheme();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseTotalPriceTimelines(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 总房价时间序列 (单位： 元) </StyledText>
        <Dimmer active={loading}>
            <Loader active={loading}/>
        </Dimmer>


        <MultiLineChart data={counts} x={"date"} y={"count"} seriesField={"name"} yLabel={"总房价时间序列 (单位： 元)"} />


        {/*<ColumnChart data={counts} x={"name"} y={"count"} />*/}


    </React.Fragment>;
}

export default CountHouseTotalPriceTimeline;