import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseTotalPrices} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import ColumnChart from "./charts/ColumnChart";

const CountHouseTotalPrice = () => {

    // const navigate = useNavigate();
    // const color = GetColor();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseTotalPrices(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <React.Fragment style={{marginBottom: 10}}> 总房价 (单位： 元) </React.Fragment>
            <Loader active={loading}/>


        <ColumnChart data={counts} x={"name"} y={"count"} />


    </React.Fragment>;
}

export default CountHouseTotalPrice;