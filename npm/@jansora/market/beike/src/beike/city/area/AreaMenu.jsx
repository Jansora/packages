import React from 'react';

import {useLocation, useNavigate, useParams} from "react-router-dom";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {FetchAreas} from "../../../request/beike";
import {Label, Loader} from "semantic-ui-react";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

const AreaMenu = () => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();
    const {cityId} = useParams();
    const [areas, loading] = FetchAreas(cityId);
    // console.log(useParams(), "CityMenu useParams()")
    // SetTitle('贝壳房价分析')

    const dark = GetDarkMode();
    return <React.Fragment>
        <StyledDescription style={{}}> 区域: </StyledDescription>
        <Loader inverted={dark} active={loading}/>

        {
            areas.map(area => {
                return {...area, pathname: `/beike/city/${cityId}/area/${area.id}`, name: area.area}
            }).map((item, index) =>
                <Label
                    key={index}
                    style={{cursor: "pointer"}}
                    onClick={() => !pathname.startsWith(item.pathname) ? navigate(item.pathname) : navigate(`/beike/city/${cityId}`)}
                    active={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname)}
                    color={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname) ? color : (dark ? "black" : null)}
                >
                    <>{item.name}</>
                </Label>
            )
        }



    </React.Fragment>;
}

export default AreaMenu;