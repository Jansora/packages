import React from 'react';

import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import styled from "styled-components";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {FetchCities} from "../request/beike";
import City from "./city/City";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import MaterialHeaderMenu from "@jansora/material/es/layout/header/MaterialHeaderMenu";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledCenterHeaderWrapper = styled.div`
    a {
      color: var(--text-color-3);
    }
  
`

const MaterialBeike = () => {

    const navigate = useNavigate();
    const color = GetColor();
    const {pathname} = useLocation();

    const [cities] = FetchCities();

    SetTitle('贝壳房价分析')
    SetDescription('数据来源自贝壳（https://www.ke.com）')
    // SetDescription('每天晚上12点更新数据，数据来源自贝壳（https://www.ke.com）')
    return <React.Fragment>

                <MaterialHeaderMenu menu={cities.map( city => {
                    return {...city, pathname: `/beike/city/${city.id}`, name: city.city}
                })}
                />



        {pathname === '/beike' && <Navigate replace={true} to="/beike/city/1" />}

        <Routes>

            <Route path="city/:cityId/*" element={<City  />} />

        </Routes>

    </React.Fragment>;
}

export default MaterialBeike;