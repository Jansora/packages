import React from 'react';

import {useLocation, useNavigate, useParams} from "react-router-dom";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {FetchDistricts} from "../../../request/beike";
import {Dimmer, Label, Loader} from "semantic-ui-react";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

const DistrictMenu = ({id}) => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();

    // console.log(useParams(), "DistrictMenu useParams()")
    const {cityId, areaId} = useParams();
    const [districts, loading] = FetchDistricts(areaId);

    // SetTitle('贝壳房价分析')
    const dark = GetDarkMode();
    return <React.Fragment>
        <StyledDescription style={{marginRight: 10}}> 商圈: </StyledDescription>
        <Dimmer active={loading}>
            <Loader active={loading}/>
        </Dimmer>

        {
            districts.map(district => {
                return {...district, pathname: `/beike/city/${cityId}/area/${areaId}/district/${district.id}`, name: district.district}
            }).map((item, index) =>
                <Label
                    key={index}
                    style={{cursor: "pointer", marginRight: 10}}
                    onClick={() => !pathname.startsWith(item.pathname) ? navigate(item.pathname) : navigate(`/beike/city/${cityId}/area/${areaId}`)}
                    active={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname)}
                    color={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname) ? color : (dark ? "black" : null)}

                >
                    <>{item.name}</>
                </Label>
            )
        }



    </React.Fragment>;
}

export default DistrictMenu;