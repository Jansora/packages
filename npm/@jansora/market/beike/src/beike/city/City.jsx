import React from 'react';

import {Route, Routes} from "react-router-dom";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import {Grid, Segment} from "semantic-ui-react";
import AreaMenu from "./area/AreaMenu";
import {Divider} from "antd";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import CityContent from "./CityContent";
import DistrictMenu from "./district/DistrictMenu";
import AddressMenu from "./address/AddressMenu";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

const City = (props) => {

    SetTitle('贝壳房价分析')

    return <StyledPageLoading>

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


        {/*<Navigate replace={true} to="/notebook/ls" />*/}
        <Routes>
            <Route path="/*" element={<CityContent  />} />
            <Route path="area/:areaId/*" element={<CityContent  />} />
            <Route path="area/:areaId/district/:districtId/*" element={<CityContent  />} />

            <Route path="area/:areaId/district/:districtId/address/:addressId/*" element={<CityContent  />} />

        </Routes>

    </StyledPageLoading>;
}

export default City;