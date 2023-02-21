import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseAveragePrices} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import ColumnChart from "./charts/ColumnChart";

const CountHouseTotalPrice = () => {

    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseAveragePrices(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 挂牌平均房价 (单位： 元/平米) </StyledText>
            <Loader active={loading}/>


        <ColumnChart data={counts} x={"name"} y={"count"} yLabel={"平均房价(单位：元/平米)"} />


    </React.Fragment>;
}

export default CountHouseTotalPrice;