import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseTotalPrices} from "../../request/beike";
import {Loader} from "semantic-ui-react";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import ColumnChart from "./charts/ColumnChart";

const CountHouseTotalPrice = () => {

    // const navigate = useNavigate();
    // const color = GetColor();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseTotalPrices(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 总房价 (单位： 元) </StyledText>
            <Loader active={loading}/>


        <ColumnChart data={counts} x={"name"} y={"count"} />


    </React.Fragment>;
}

export default CountHouseTotalPrice;