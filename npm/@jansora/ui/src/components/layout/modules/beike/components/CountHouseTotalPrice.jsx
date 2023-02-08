import React from 'react';

import {useParams} from "react-router-dom";
import {FetchHouseTotalPrices} from "../../../../components/request/beike";
import {Dimmer, Loader} from "semantic-ui-react";
import StyledText from "../../../../components/styled/base/StyledText";
import ColumnChart from "./charts/ColumnChart";

const CountHouseTotalPrice = () => {

    // const navigate = useNavigate();
    // const color = GetTheme();
    // const {pathname} = useLocation();
    const {cityId, areaId, districtId, addressId} = useParams();
    const [counts, loading] = FetchHouseTotalPrices(cityId, areaId, districtId, addressId);


    return <React.Fragment>
        <StyledText style={{marginBottom: 10}}> 总房价 (单位： 元) </StyledText>
        <Dimmer active={loading}>
            <Loader active={loading}/>
        </Dimmer>


        <ColumnChart data={counts} x={"name"} y={"count"} />


    </React.Fragment>;
}

export default CountHouseTotalPrice;