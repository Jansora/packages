import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseAveragePriceTimelines} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import MultiLineChart from "./charts/MultiLineChart";

const CountHouseAveragePriceTimeline = () => {

    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseAveragePriceTimelines(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 挂牌平均房价时间序列 (单位： 元/平米) </StyledText>
            <Loader active={loading}/>


        <MultiLineChart data={counts} x={"date"} y={"count"} seriesField={"name"} yLabel={"挂牌平均房价时间序列(单位：元/平米)"} />

    </React.Fragment>;
}

export default CountHouseAveragePriceTimeline;