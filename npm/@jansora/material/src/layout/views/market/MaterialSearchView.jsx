import React from 'react';

import {Divider} from "antd";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import SetDescription from "../../../hooks/setter/SetDescription";
import {useResponsive} from "ahooks";
import StyledPageLoading from "../../../components/styled/StyledLoading";
import {Link} from "react-router-dom";
import GetLoginStatus from "../../../hooks/getter/GetLoginStatus";

import {Button, Grid, Segment} from "semantic-ui-react";
import GetColor from "../../../hooks/getter/GetColor";
import SearchView from "./SearchView";
import GetDarkMode from "../../../hooks/getter/GetDarkMode";
import SetTitle from "../../../hooks/setter/SetTitle";
// import StyledPageLoading from "../../../components/styledx/StyledLoading";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const MaterialSearchView = ({baseUrl, name, description, title}) => {


    const color = GetColor();
    const dark = GetDarkMode();
    const responsive = useResponsive();
    const loginStatus = GetLoginStatus();

    const {TitleView, ClassifiesView, RelationTagsView, PageView, DataView, searchHook} = SearchView(baseUrl);


    SetDescription(description)

    SetTitle(title)


    return <React.Fragment>
        <StyledPageLoading >
            <Segment inverted={dark}>
                <Grid columns={1} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <StyledDescription style={{}}> 类别: </StyledDescription>
                            <ClassifiesView />

                            <div style={{float: "right"}}>
                                {TitleView}
                                {
                                    loginStatus && responsive.middle && <React.Fragment>
                                        <Button  size="small" color={color} style={{marginLeft: 30}} as={Link} to={`/${baseUrl}/new`}><>新建{name}</></Button>
                                    </React.Fragment>
                                }
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider style={{margin: "0"}} />
                    <Grid.Row >
                        <Grid.Column>
                            <StyledDescription style={{marginRight: 10}}> 标签: </StyledDescription>
                            <RelationTagsView />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
            <DataView baseUrl={`/${baseUrl}`} />
            {PageView}
        </StyledPageLoading>
    </React.Fragment>;
}

export default MaterialSearchView;