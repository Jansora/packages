import React from "react";

import SearchHook from "./SearchHook";
import {Grid, Icon, Input, Label, Loader, Pagination} from "semantic-ui-react";
// import StyledIconFont from "../../styled/StyledIconFont";
import GetColor from "../../../hooks/getter/GetColor";
import {Tooltip} from "antd";
// import StyledDescription from "../../styled/base/StyledDescription";
import {momentZh} from "../../../components/utils";
import styled from "styled-components";
import {useResponsive} from "ahooks";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import StyledIconFont from "../../../components/styled/StyledIconFont";
import GetDarkMode from "../../../hooks/getter/GetDarkMode";
import {Link} from "react-router-dom";


const StyledWrapper = styled.div`

    display: block;
    width: 256px;
    height: 224px;
    margin: 0 auto;
    background: var(--background-color-2);
    border-radius: 8px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
    header {
      height: 156px;
      img {
        border-radius: 4px;
        width: 256px;
        height: 156px;
        background: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
        div.tags {
            width: 236px;
            //margin-bottom: -29px;
            //float: right;
            position: absolute;
            //right: 0;
        }
    }
    section {
      margin: 12px 16px 4px;
      span {
        //flex: 1 1 auto;
        //font-size: 1rem;
        width: 100%;
        height: 20px;
        font-weight: 500;
        color: var(--text-color-2);
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
    
      }
      overflow-x: hidden;
    }
  
    footer {  
      overflow-x: hidden;
      text-overflow:ellipsis; //溢出用省略号显示
      white-space:nowrap; //溢出不换行
      line-height: 1.5;
      -webkit-line-clamp:2;
      margin: 4px 16px 12px;
    }
  
  //margin-bottom: 10px;
`


const SearchView = (baseUrl) => {

    const color = GetColor();
    const responsive = useResponsive();
    const searchHook = SearchHook(baseUrl);

    const {search, data, tag, setTag, classify, setClassify, classifies, relationTags, setPageNum, pageSize, total, loading} = searchHook


    const TitleView = <Input
        inverted={GetDarkMode()}
        size="mini"
        icon={<Icon name="search"/>}
        placeholder="请输入标题来进行模糊搜索"
        loading={loading}
        // value={title}
        onChange={event => search(event.target.value)}
        style={{ width: 200 }}
    />

    const ClassifiesView = () => classifies.map((item, index) =>
        <Label
            style={{cursor: "pointer"}}
            color={item.av === classify ? color : GetDarkMode() ? "black" : null}
            // icon={<StyledIconFont type={item.cv} style={{marginTop : 5}} />}
            onClick={() => setClassify(item.av !== classify ? item.av : null)}
            key={item.av}
        >
            {
                item.cv &&  <StyledIconFont type={item.cv} style={{width: 16, height: 16, marginRight: 3, marginBottom: -2}} />
            }
            {item.av}
        </Label>
    )
    const RelationTagsView = () => relationTags.map((item, index) =>
        <Label
            style={{cursor: "pointer", marginRight: 10}}
            // color={item[0] === tag ? color : "black"}
            onClick={() => setTag(item.key !== tag ? item.key : null)}
            key={item.key}
            color={item.key === tag ? color : null}
        >
            {item.key}
        </Label>
    )

    const TagsView = (item) => !!item.tag && item.tag.split(",").map((_tag, _index) =>
        <Label
            style={{cursor: "pointer", float: "right", marginLeft: 5}}
            // color={item[0] === tag ? color : "black"}
            onClick={() => setTag(_tag !== tag ? _tag : null)}
            key={_index}
            color={color}
        >
            {_tag}
        </Label>
    )

    const PageView = <div>

            {/*<StyledDescription style={{marginRight: 10}}>页码: </StyledDescription>*/}
        {/*<StyledDescription>总数: </StyledDescription>*/}
        {/*<span style={{margin: "3px 3px 0 3px"}}>{total}</span>*/}
        <Pagination
                // defaultActivePage={5}
                inverted={GetDarkMode()}
                size='mini'
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={parseInt(total/pageSize) + 1}
                onPageChange={(e, { activePage }) => setPageNum(activePage)}
            />
    </div>
    const DataView = ({baseUrl}) =>
        <Grid columns={responsive.huge ? 8 : (responsive.large ? 6 : (responsive.middle ? 4 : 1))}>
            <Grid.Row style={{minHeight: 500, paddingTop: 0}}>

                <Loader active={loading} >检索中...</Loader>


                {data.map((item, index) =>
                    <Grid.Column style={{marginTop: 45}} key={index}>
                        <div key={index}>
                            <StyledWrapper >
                                <header>
                                    <div className="tags">
                                        {
                                            !!item.tag && item.tag.split(",").map((_tag, _index) =>
                                                <Label
                                                    style={{cursor: "pointer", float: "right", marginLeft: 5}}
                                                    // color={item[0] === tag ? color : "black"}
                                                    onClick={() => setTag(_tag !== tag ? _tag : null)}
                                                    key={_index}
                                                    color={color}
                                                >
                                                    {_tag}
                                                </Label>
                                            )
                                        }
                                    </div>
                                    <Link to={`${baseUrl}/${item.id}`} rel="noreferrer" >
                                        <Tooltip placement="bottom" title={item.description}>
                                            <img src={item.logo} alt={item.title}/>
                                        </Tooltip>
                                    </Link>
                                </header>
                                <section>
                                    <Link to={`${baseUrl}/${item.id}`} rel="noreferrer" target="_blank">
                                        <Tooltip placement="bottom" title={item.name}>
                                            <span title={item.name}
                                                  style={{color: item.enabled ? "none" : "var(--primary-color)"}}>{item.name}</span>
                                        </Tooltip>
                                    </Link>
                                </section>
                                <footer>
                                    <Tooltip placement="bottom" title={item.updatedAt}>
                                        <StyledDescription>
                                            {momentZh(item.updatedAt).fromNow()}
                                        </StyledDescription>
                                    </Tooltip>
                                </footer>

                            </StyledWrapper>

                        </div>
                    </Grid.Column>
                )}

            </Grid.Row>

        </Grid>

    return {TitleView, ClassifiesView, RelationTagsView, TagsView, PageView, DataView, searchHook};
}

export default SearchView;