import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseAveragePriceTimelines} from "../../../../components/request/beike";
import {Dimmer, Loader} from "semantic-ui-react";
import StyledText from "../../../../components/styled/base/StyledText";
import MultiLineChart from "./charts/MultiLineChart";

const CountHouseAveragePriceTimeline = () => {

    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseAveragePriceTimelines(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 挂牌平均房价时间序列 (单位： 元/平米) </StyledText>
        <Dimmer active={loading}>
            <Loader active={loading}/>
        </Dimmer>


        <MultiLineChart data={counts} x={"date"} y={"count"} seriesField={"name"} yLabel={"挂牌平均房价时间序列(单位：元/平米)"} />

    </React.Fragment>;
}

export default CountHouseAveragePriceTimeline;