import React from 'react';

import {Divider, Tooltip} from "antd";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import SetDescription from "../../../hooks/setter/SetDescription";
import {useResponsive} from "ahooks";
import StyledPageLoading from "../../../components/styled/StyledLoading";
import {Link} from "react-router-dom";
import GetLoginStatus from "../../../hooks/getter/GetLoginStatus";

import {Button, Icon, Label, Menu, Portal, Segment} from "semantic-ui-react";
import GetColor from "../../../hooks/getter/GetColor";
import SearchView from "./SearchView";
import GetDarkMode from "../../../hooks/getter/GetDarkMode";
import SetTitle from "../../../hooks/setter/SetTitle";
import MaterialContainerHeader from "../../../components/view/container/MaterialContainerHeader";
import MaterialContainerContent from "../../../components/view/container/MaterialContainerContent";
import MaterialContainer from "../../../components/view/container/MaterialContainer";
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
    const {orderBy, setOrderBy, sort, setSort, total, tag, setTag, relationTags} = searchHook
    // const {search, data, tag, setTag, classify, setClassify, classifies, relationTags, setPageNum, pageSize, total, loading} = searchHook
    const { classify, setClassify, classifies} = searchHook


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
                    <StyledDescription style={{marginRight: 10}}>类别: </StyledDescription>

                    <Menu inverted={dark} size="mini" style={{margin: "0"}}>
                        {
                            classifies.map((item, index) =>
                                <Menu.Item key={index} onClick={() => setClassify(item.av !== classify ? item.av : null)} active={item.av === classify} color={item.av === classify ? color : dark ? "black" : null}>
                                    <>{item.av}</>
                                </Menu.Item>
                            )
                        }
                    </Menu>
                    <Divider type="vertical"  />
                    <StyledDescription style={{marginRight: 10}}>标签: </StyledDescription>

                    <Menu inverted={dark} size="mini" style={{margin: "0"}}>
                        {
                            relationTags.slice(0, 5).map((item, index) =>
                                <Menu.Item key={index} onClick={() => setTag(item.key !== tag ? item.key : null)}
                                           active={item.key === tag} color={item.key === tag ? color : dark ? "black" : null}>
                                    <>{item.key}</> <Label style={{zIndex: 1005}} color={color} floating circular size="mini"> {item.value} </Label>
                                </Menu.Item>
                            )
                        }
                    </Menu>



                    {
                        relationTags.length > 5 && <Portal
                            closeOnTriggerClick
                            openOnTriggerClick
                            trigger={
                                <Menu inverted={dark} size="mini" style={{margin: "0"}}>
                                    <Menu.Item as={'a'}
                                        // onClick={() => setActive('模板')}
                                        // active={'模板' === active} color={'模板' === active ? color : null}>
                                    >
                                        <Tooltip title={"查看全部标签"}>
                                            <Icon name="angle double right" />
                                        </Tooltip>
                                    </Menu.Item>
                                </Menu>
                            }
                            // onOpen={this.handleOpen}
                            // onClose={this.handleClose}
                        >
                            <Segment
                                inverted={dark}
                                style={{
                                    left: '30vw',
                                    width: "40vw",
                                    position: 'fixed',
                                    top: 'calc(var(--header-height) + var(--layout-header-height) + 10px)',
                                    zIndex: 1003,
                                    margin: "0",
                                    padding: "10px 0 20px 0",
                                    // display: "flex",
                                    // justifyContent: "center",
                                    // flexWrap: "nowrap"
                                    // "overflow-x": "auto"
                                }}
                            >
                                {/*<FlexPadding />*/}
                                {/*<div style={{margin: "0 auto"}}>*/}
                                {/*<Header as={'h3'} textAlign="center"> 标签 </Header>*/}
                                {/*<Divider style={{marginBottom: 0 , marginTop: 5}} />*/}
                                {/*<Dropdown*/}
                                {/*    inline*/}
                                {/*    // options={friendOptions}*/}
                                {/*    // defaultValue={friendOptions[0].value}*/}
                                {/*/>*/}
                                {/*<Grid columns="equals" style={{marginTop: "10px"}}>*/}
                                {relationTags.slice(5, 100000).map((item, index) =>
                                    <Label
                                        style={{cursor: "pointer", margin: "6px 10px",}}
                                        // color={item[0] === tag ? color : "black"}
                                        onClick={() => setTag(item.key !== tag ? item.key : null)}
                                        key={item.key}
                                        color={item.key === tag ? color : null}
                                    >
                                        {item.key}
                                    </Label>
                                )}
                            </Segment>
                        </Portal>
                    }

                    {/*<Menu inverted={dark} size="mini" style={{margin: "0"}}>*/}
                    {/*    <Dropdown text='标签' pointing className='link item'>*/}
                    {/*        <Dropdown.Menu inverted={dark} >*/}
                    {/*                        {relationTags.map((item, index) => <Dropdown.Item*/}
                    {/*                            className={dark ? "inverted" : ""}*/}
                    {/*                                inverted={dark}>*/}
                    {/*                        <Label*/}
                    {/*                            style={{cursor: "pointer", marginRight: 10}}*/}
                    {/*                            // color={item[0] === tag ? color : "black"}*/}
                    {/*                            onClick={() => setTag(item.key !== tag ? item.key : null)}*/}
                    {/*                            key={item.key}*/}
                    {/*                            color={item.key === tag ? color : null}*/}
                    {/*                        >*/}
                    {/*                            {item.key}*/}
                    {/*                        </Label>*/}
                    {/*                        </Dropdown.Item>*/}
                    {/*                        )}*/}
                    {/*        </Dropdown.Menu>*/}
                    {/*    </Dropdown>*/}
                    {/*</Menu>*/}
                    {/*<Divider type="vertical"  />*/}
                    {/*<Menu inverted={dark} size="mini" style={{margin: "0"}}>*/}
                    {/*    {*/}
                    {/*        [{name: "名称", value: "name"}, {name: "分类", value: "classify"}, {name: "标签", value: "tag"}].map((item, index) =>*/}
                    {/*            <Menu.Item key={index} onClick={() => setOrderBy(item.value)} active={orderBy === item.value} color={orderBy === item.value ? color : null}>*/}
                    {/*                <>{item.name}</>*/}
                    {/*            </Menu.Item>*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</Menu>*/}


                    <Divider type="vertical"  />
                    <StyledDescription style={{marginRight: 10}}>排序: </StyledDescription>
                    <Menu inverted={dark} size="mini" style={{margin: "0"}}>
                        {
                            [{name: "最近更新在前", icon: "sort content ascending", value: "ASC"}, {name: "最近更新在后", icon: "sort content descending", value: "DESC"}].map((item, index) =>
                                <Menu.Item key={index} onClick={() => setSort(item.value)} active={sort === item.value} color={sort === item.value ? color : null}>
                                    <Tooltip title={item.name}>
                                        <Icon name={item.icon} />
                                    </Tooltip>

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
                        {/*<StyledDescription>{total}</StyledDescription>*/}
                        {/*<Divider type="vertical"  />*/}
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
            {/*<Segment inverted={dark}>*/}
            {/*    <Grid columns={1} divided>*/}
            {/*        /!*<Grid.Row>*!/*/}
            {/*        /!*    <Grid.Column>*!/*/}
            {/*        /!*        <StyledDescription style={{}}> 类别: </StyledDescription>*!/*/}
            {/*        /!*        <ClassifiesView />*!/*/}

            {/*        /!*    </Grid.Column>*!/*/}
            {/*        /!*</Grid.Row>*!/*/}
            {/*        <Divider style={{margin: "0"}} />*/}
            {/*        /!*<Grid.Row >*!/*/}
            {/*        /!*    <Grid.Column>*!/*/}
            {/*        /!*        <StyledDescription style={{marginRight: 10}}> 标签: </StyledDescription>*!/*/}
            {/*        /!*        <RelationTagsView />*!/*/}
            {/*        /!*    </Grid.Column>*!/*/}
            {/*        /!*</Grid.Row>*!/*/}

            {/*    </Grid>*/}
            {/*</Segment>*/}
            <DataView baseUrl={`/${baseUrl}`} />

        </StyledPageLoading>
            </MaterialContainerContent>
        </MaterialContainer>
    </React.Fragment>;
}

export default MaterialSearchView;