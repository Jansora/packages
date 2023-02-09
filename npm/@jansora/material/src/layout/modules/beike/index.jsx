import React from 'react';

import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import SetTitle from "../../../components/hooks/setter/SetTitle";
import {Menu} from "semantic-ui-react";
import StyledText from "../../../components/styled/base/StyledText";
import CenterHeader from "../../header/CenterHeader";
import styled from "styled-components";
import GetTheme from "../../../components/hooks/getter/GetTheme";
import {FetchCities} from "../../../components/request/beike";
import City from "./city/City";
import SetDescription from "../../../components/hooks/setter/SetDescription";

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

const Beike = () => {

    const navigate = useNavigate();
    const color = GetTheme();
    const {pathname} = useLocation();

    const [cities] = FetchCities();

    SetTitle('贝壳房价分析')
    SetDescription('每天晚上12点更新数据，数据来源自贝壳（https://www.ke.com）')
    return <React.Fragment>
        <CenterHeader>
            <StyledCenterHeaderWrapper>
                <Menu inverted>
                    {
                        cities.map( city => {
                            return {...city, pathname: `/beike/city/${city.id}`, name: city.city}
                        }).map((item, index) =>
                            <Menu.Item
                                key={index}
                                onClick={() => navigate(item.pathname) || console.log(item, pathname)}
                                active={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname)}
                                color={(pathname.startsWith(item.pathname + "/") || pathname === item.pathname) ? color : "black"}
                            >
                                <StyledText>{item.name}</StyledText>
                            </Menu.Item>
                        )
                    }
                </Menu>


            </StyledCenterHeaderWrapper>

        </CenterHeader>
        {pathname === '/beike' && <Navigate replace={true} to="/beike/city/1" />}

        <Routes>

            <Route path="city/:cityId/*" element={<City  />} />

        </Routes>

    </React.Fragment>;
}

export default Beike;