import React from 'react';

import {useLocation, useNavigate, useParams} from "react-router-dom";
import GetTheme from "../../../../../components/hooks/getter/GetTheme";
import {FetchAreas} from "../../../../../components/request/beike";
import {Dimmer, Label, Loader} from "semantic-ui-react";
import StyledText from "../../../../../components/styled/base/StyledText";
import StyledDescription from "../../../../../components/styled/base/StyledDescription";

const AreaMenu = () => {

    const navigate = useNavigate();
    const color = GetTheme();
    const {pathname} = useLocation();
    const {cityId} = useParams();
    const [areas, loading] = FetchAreas(cityId);
    // console.log(useParams(), "CityMenu useParams()")
    // SetTitle('贝壳房价分析')

    return <React.Fragment>
        <StyledDescription style={{}}> 区域: </StyledDescription>
        <Dimmer active={loading}>
            <Loader active={loading}/>
        </Dimmer>

        {
            areas.map(area => {
                return {...area, pathname: `/beike/city/${cityId}/area/${area.id}`, name: area.area}
            }).map((item, index) =>
                <Label
                    key={index}
                    style={{cursor: "pointer"}}
                    onClick={() => !pathname.startsWith(item.pathname) ? navigate(item.pathname) : navigate(`/beike/city/${cityId}`)}
                    active={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname)}
                    color={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname) ? color : "black"}
                >
                    <StyledText>{item.name}</StyledText>
                </Label>
            )
        }



    </React.Fragment>;
}

export default AreaMenu;