import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseCounts} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import ColumnChart from "./charts/ColumnChart";

const CountHouseNum = () => {

    // const navigate = useNavigate();
    // const color = GetColor();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId} = useParams();
    const [counts, loading] = FetchHouseCounts(cityId, areaId, districtId);


    return <React.Fragment>
        <React.Fragment style={{marginBottom: 10}}> 二手房市场挂牌占比 (昨天) </React.Fragment>

            <Loader active={loading}/>



        {/*<ColumnChart data={counts} x={"name"} y={"count"}  />*/}

        <ColumnChart data={counts} x={"name"} y={"count"} yLabel={"挂牌房子数量(单位：套)"} />

    </React.Fragment>;
}

export default CountHouseNum;