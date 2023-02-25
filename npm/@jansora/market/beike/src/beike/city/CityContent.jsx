import React, {useState} from 'react';

import {Routes, useParams} from "react-router-dom";
import {Grid, Menu} from "semantic-ui-react";
import CountHouseNum from "../components/CountHouseNum";
import CountHouseTotalPrice from "../components/CountHouseTotalPrice";
import CountHouseAveragePrice from "../components/CountHouseAveragePrice";
import CountHouseNumTimeline from "../components/CountHouseNumTimeline";
import CountHouseTotalPriceTimeline from "../components/CountHouseTotalPriceTimeline";
import CountHouseAveragePriceTimeline from "../components/CountHouseAveragePriceTimeline";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

const CityContent = () => {

    // 统计菜单

    const { districtId} = useParams();

    const statisticsMenus = !districtId ? ["市场供应", "平均房价", "总房价"] : ["平均房价", "总房价"]

    const timelineMenus =  !districtId ? ["市场供应序列", "平均房价序列", "总房价序列"] : ["平均房价序列", "总房价序列"]

    const [active, setActive] = useState(statisticsMenus[0])
    const dark = GetDarkMode();
    return <React.Fragment>

        <Grid>
            <Grid.Row >
                <Grid.Column width={4}>

                    <div style={{marginBottom: 10}}> 统计数据 (昨天)</div>
                    <Menu inverted={dark} pointing vertical>
                        {
                            statisticsMenus.map((item, index) =>
                                <Menu.Item
                                    key={item}
                                    name={item}
                                    active={active === item}
                                    onClick={() => setActive(item)}
                                />
                            )
                        }
                    </Menu>

                    时序数据 (历史)
                    <Menu inverted={dark} pointing vertical>
                        {
                            timelineMenus.map((item, index) =>
                                <Menu.Item
                                    key={item}
                                    name={item}
                                    active={active === item}
                                    onClick={() => setActive(item)}
                                />
                            )
                        }
                    </Menu>

                </Grid.Column>

                <Grid.Column width={12}>
                    {active === "市场供应" &&  <CountHouseNum />}
                    {active === "平均房价" &&  <CountHouseAveragePrice />}
                    {active === "总房价" &&  <CountHouseTotalPrice />}

                    {active === "市场供应序列" &&  <CountHouseNumTimeline />}
                    {active === "平均房价序列" &&  <CountHouseAveragePriceTimeline />}
                    {active === "总房价序列" &&  <CountHouseTotalPriceTimeline />}
                </Grid.Column>
            </Grid.Row>


        </Grid>


        <Routes>
            {/*<Redirect from="/notebook" to="/notebook/ls" exact={true} />*/}
            {/*<Route path=":city/*" element={<Component  />} />*/}
            {/*<Route path="action/*" element={<Action  />} />*/}

        </Routes>

    </React.Fragment>;
}

export default CityContent;