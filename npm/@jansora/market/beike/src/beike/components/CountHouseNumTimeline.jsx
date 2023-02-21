import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseCountTimelines} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import MultiLineChart from "./charts/MultiLineChart";

const CountHouseNumTimeline = () => {

    // const navigate = useNavigate();
    // const color = GetColor();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId} = useParams();
    const [counts, loading] = FetchHouseCountTimelines(cityId, areaId, districtId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 二手房市场挂牌占比时间序列 </StyledText>

            <Loader active={loading}/>



        {/*<ColumnChart data={counts} x={"name"} y={"count"}  />*/}
        {/*<MultiLineChart data={counts} seriesField={"name"}  yField={'count'} xField={'date'} meta={{num: {alias: "平均房价时间序列"}}} />*/}

        <MultiLineChart data={counts} x={"date"} y={"count"} seriesField={"name"} yLabel={"挂牌房子数量时间序列(单位：套)"} />

    </React.Fragment>;
}

export default CountHouseNumTimeline;