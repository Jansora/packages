import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseTotalPriceTimelines} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import MultiLineChart from "./charts/MultiLineChart";

const CountHouseTotalPriceTimeline = () => {

    // const navigate = useNavigate();
    // const color = GetColor();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseTotalPriceTimelines(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <React.Fragment style={{marginBottom: 10}}> 总房价时间序列 (单位： 元) </React.Fragment>
            <Loader active={loading}/>


        <MultiLineChart data={counts} x={"date"} y={"count"} seriesField={"name"} yLabel={"总房价时间序列 (单位： 元)"} />


        {/*<ColumnChart data={counts} x={"name"} y={"count"} />*/}


    </React.Fragment>;
}

export default CountHouseTotalPriceTimeline;