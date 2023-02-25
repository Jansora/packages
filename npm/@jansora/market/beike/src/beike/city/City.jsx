import React, {useState} from 'react';

import {Route, Routes, useParams} from "react-router-dom";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import {Grid, Menu, Segment} from "semantic-ui-react";
import AreaMenu from "./area/AreaMenu";
import {Divider} from "antd";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import DistrictMenu from "./district/DistrictMenu";
import AddressMenu from "./address/AddressMenu";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import MaterialContainer from "@jansora/material/es/components/view/container/MaterialContainer";
import MaterialContainerHeader from "@jansora/material/es/components/view/container/MaterialContainerHeader";
import MaterialContainerContent from "@jansora/material/es/components/view/container/MaterialContainerContent";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import CountHouseNum from "../components/CountHouseNum";
import CountHouseAveragePrice from "../components/CountHouseAveragePrice";
import CountHouseTotalPrice from "../components/CountHouseTotalPrice";
import CountHouseNumTimeline from "../components/CountHouseNumTimeline";
import CountHouseAveragePriceTimeline from "../components/CountHouseAveragePriceTimeline";
import CountHouseTotalPriceTimeline from "../components/CountHouseTotalPriceTimeline";

const City = (props) => {

    SetTitle('贝壳房价分析')

    // 统计菜单

    const color = GetColor();
    const { districtId} = useParams();

    const statisticsMenus = !districtId ? ["市场供应", "平均房价", "总房价"] : ["平均房价", "总房价"]

    const timelineMenus =  !districtId ? ["市场供应序列", "平均房价序列", "总房价序列"] : ["平均房价序列", "总房价序列"]

    const [active, setActive] = useState(statisticsMenus[0])
    const dark = GetDarkMode();

    return <MaterialContainer>
        <MaterialContainerHeader
            right={
            <React.Fragment>

                <StyledDescription>统计数据 (昨天):</StyledDescription>

                <Menu inverted={GetDarkMode()} size="mini" style={{margin: "0"}}>
                    {
                        statisticsMenus.map((item, index) =>
                            <Menu.Item key={index} onClick={() => setActive(item)} active={item === active} color={item === active ? color : null}>
                                <StyledText>{item}</StyledText>
                            </Menu.Item>
                        )
                    }
                </Menu>
                <Divider type="vertical"  />
                <StyledDescription>时序数据 (历史): </StyledDescription>
                <Menu inverted={GetDarkMode()} size="mini" style={{margin: "0"}}>
                    {
                        timelineMenus.map((item, index) =>
                            <Menu.Item key={index} onClick={() => setActive(item)} active={item === active} color={item === active ? color : null}>
                                <StyledText>{item}</StyledText>
                            </Menu.Item>
                        )
                    }
                </Menu>
            </React.Fragment>
            }

        />

        <MaterialContainerContent>

        <StyledPageLoading>

        <Segment inverted={GetDarkMode()}>

            <Grid columns={1} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <AreaMenu />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider style={{margin: "0"}} />
                    <Grid.Row >
                        <Grid.Column>
                            <Routes>
                                <Route path="area/:areaId/*" element={<DistrictMenu  />} />
                            </Routes>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider style={{margin: "0"}} />
                    <Grid.Row >
                        <Grid.Column>
                            <Routes>
                                <Route path="area/:areaId/district/:districtId/address/:addressId/*" element={<AddressMenu  />} />
                                <Route path="area/:areaId/district/:districtId/*" element={<AddressMenu  />} />
                            </Routes>
                        </Grid.Column>
                    </Grid.Row>

            </Grid>
        </Segment>


            {active === "市场供应" &&  <CountHouseNum />}
            {active === "平均房价" &&  <CountHouseAveragePrice />}
            {active === "总房价" &&  <CountHouseTotalPrice />}

            {active === "市场供应序列" &&  <CountHouseNumTimeline />}
            {active === "平均房价序列" &&  <CountHouseAveragePriceTimeline />}
            {active === "总房价序列" &&  <CountHouseTotalPriceTimeline />}

        {/*<Navigate replace={true} to="/notebook/ls" />*/}
        {/*<Routes>*/}
        {/*    <Route path="/*" element={<CityContent  />} />*/}
        {/*    <Route path="area/:areaId/*" element={<CityContent  />} />*/}
        {/*    <Route path="area/:areaId/district/:districtId/*" element={<CityContent  />} />*/}

        {/*    <Route path="area/:areaId/district/:districtId/address/:addressId/*" element={<CityContent  />} />*/}

        {/*</Routes>*/}

    </StyledPageLoading>

        </MaterialContainerContent>
    </MaterialContainer>;
}

export default City;