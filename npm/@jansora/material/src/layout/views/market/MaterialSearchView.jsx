import React from 'react';

import {Divider} from "antd";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import SetDescription from "../../../hooks/setter/SetDescription";
import {useResponsive} from "ahooks";
import StyledPageLoading from "../../../components/styled/StyledLoading";
import {Link} from "react-router-dom";
import GetLoginStatus from "../../../hooks/getter/GetLoginStatus";

import {Button, Grid, Icon, Menu, Segment} from "semantic-ui-react";
import GetColor from "../../../hooks/getter/GetColor";
import SearchView from "./SearchView";
import GetDarkMode from "../../../hooks/getter/GetDarkMode";
import SetTitle from "../../../hooks/setter/SetTitle";
import MaterialContainerHeader from "../../../components/view/container/MaterialContainerHeader";
import MaterialContainerContent from "../../../components/view/container/MaterialContainerContent";
import MaterialContainer from "../../../components/view/container/MaterialContainer";
import StyledText from "../../../components/styled/base/StyledText";
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
    const {orderBy, setOrderBy, sort, setSort, total} = searchHook
    // const {search, data, tag, setTag, classify, setClassify, classifies, relationTags, setPageNum, pageSize, total, loading} = searchHook


    SetDescription(description)

    SetTitle(title)


    return <React.Fragment>
        <MaterialContainer>
            <MaterialContainerHeader
                leftStyle={{}}
                centerStyle={{}}
                rightStyle={{}}
                left={<React.Fragment>
                    {/*<StyledDescription style={{marginRight: 5}}> </StyledDescription>*/}

                    <Menu inverted={GetDarkMode()} size="mini" style={{margin: "0"}}>
                        {
                            [{name: "名称", value: "name"}, {name: "分类", value: "classify"}, {name: "标签", value: "tag"}].map((item, index) =>
                                <Menu.Item key={index} onClick={() => setOrderBy(item.value)} active={orderBy === item.value} color={orderBy === item.value ? color : null}>
                                    <StyledText>{item.name}</StyledText>
                                </Menu.Item>
                            )
                        }
                    </Menu>
                    <Divider type="vertical"  />
                    <Menu inverted={GetDarkMode()} size="mini" style={{margin: "0"}}>
                        {
                            [{name: "正序", value: "ASC"}, {name: "倒序", value: "DESC"}].map((item, index) =>
                                <Menu.Item key={index} onClick={() => setSort(item.value)} active={sort === item.value} color={sort === item.value ? color : null}>
                                    <StyledText>{item.name}</StyledText>
                                </Menu.Item>
                            )
                        }
                    </Menu>
                    <Divider type="vertical"  />
                    {TitleView}
                </React.Fragment>
                }
                // center={
                //     <React.Fragment>
                //
                //     </React.Fragment>
                // }
                right={
                         <React.Fragment>
                        <StyledDescription>{total}</StyledDescription>
                        <Divider type="vertical"  />
                        {PageView}
                             {
                                 loginStatus && <><Divider type="vertical"  />
                                 <Button inverted={dark} icon size="mini" color={color} as={Link} to={`/${baseUrl}/new`}>
                                 <Icon name='edit' />
                                 </Button>
                             </>
                             }

                    </React.Fragment>

                }
            />

            <MaterialContainerContent>
                {/*<MaterialSearchView baseUrl={'notebook'} name={'组件'} description={"组件列表"} title={'CodeHub'} />*/}



        <StyledPageLoading >
            <Segment inverted={dark}>
                <Grid columns={1} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <StyledDescription style={{}}> 类别: </StyledDescription>
                            <ClassifiesView />

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

        </StyledPageLoading>
            </MaterialContainerContent>
        </MaterialContainer>
    </React.Fragment>;
}

export default MaterialSearchView;