import React, {useEffect, useState} from 'react';

import {Divider, Tooltip} from "antd";
import StyledIconFont from "../../../../components/styled/StyledIconFont";
import StyledDescription from "../../../../components/styled/base/StyledDescription";
import SetDescription from "../../../../components/hooks/setter/SetDescription";
import {useDebounceFn, useResponsive, useScroll} from "ahooks";
import StyledPageLoading from "../../../../components/styled/StyledLoading";
import styled from "styled-components";
import {Link} from "react-router-dom";
import GetLoginStatus from "../../../../components/hooks/getter/GetLoginStatus";
import {momentZh} from "../../../../components/utils";
import {Button, Dimmer, Grid, Icon, Input, Label, Loader, Pagination, Segment} from "semantic-ui-react";
import GetTheme from "../../../../components/hooks/getter/GetTheme";
import {FetchActions, FetchClassifies, FetchRelationTags} from "../../../../components/request/action";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledWrapper = styled.div`

    display: block;
    width: 236px;
    height: 224px;
    margin: 0 auto;
    background: var(--background-color-2);
    border-radius: 8px;
    header {
      height: 156px;
      img {
        border-radius: 4px;
        width: 236px;
        height: 156px;
        background: white;
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
  
  margin-bottom: 10px;
`


const Actions = (props) => {
    SetDescription(`检索你需要的模板吧~`)

    const color = GetTheme();
    const responsive = useResponsive();
    const loginStatus = GetLoginStatus();

    const [tag, setTag] = useState('');
    const [classify, setClassify] = useState(null);
    const [classifies, classifiesLoading] = FetchClassifies();
    const [relationTags] = FetchRelationTags(classify);
    const [pageNum, setPageNum] = useState(1);
    const pageSize = responsive.huge ? 24 : (responsive.large ? 12 : (responsive.middle ? 8 : 6));
    const [orderBy] = useState('updated_at');
    const [sort] = useState('DESC');

    const [title, setTitle] = useState('');

    const [actions, setNotes, total, setLock, loading] = FetchActions(classify, tag, title, pageSize, pageNum, orderBy, sort, setPageNum);

    useEffect(() => {
        setTag('')
    }, [classify])

    const autoSearch = (value) => {
        setTitle(value)
        setNotes([]);setPageNum(1);setLock(false)
    }

    const { run: search } = useDebounceFn(
        autoSearch,
        {
            wait: 1000,
        },
    );



    const position = useScroll(document.getElementById('layout'));
    console.log(position)

    useEffect(() => {

        console.log(document.getElementById('layout').scrollHeight / document.getElementById('layout').clientHeight)


    }, [position])

    return <StyledPageLoading>

        <Segment inverted>

            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Dimmer active={classifiesLoading}>
                            <Loader active={classifiesLoading}/>
                        </Dimmer>
                        <StyledDescription style={{}}> 类别: </StyledDescription>

                            {
                                classifies.map((item, index) =>
                                    <Label
                                        style={{cursor: "pointer"}}
                                        color={item.av === classify ? color : "black"}
                                        // icon={<StyledIconFont type={item.cv} style={{marginTop : 5}} />}
                                        onClick={() => setClassify(item.av !== classify ? item.av : null)}
                                        key={item.av}
                                    >
                                        <StyledIconFont type={item.cv} style={{width: 16, height: 16, marginRight: 3, marginBottom: -2}} />
                                        {item.av}
                                    </Label>
                                )
                            }


                        <div style={{float: "right"}}>
                            <Input
                                inverted
                                size="mini"
                                icon={<Icon name="search"/>
                                }
                                placeholder="请输入标题来进行模糊搜索"
                                loading={loading}
                                onChange={event => search(event.target.value)}
                                style={{ width: 250 }}
                            />

                            {
                                loginStatus && responsive.middle && <React.Fragment>
                                    <Button  size="small" color={color} style={{marginLeft: 30}} as={Link} to={"/codehub/action/new"}>新建行为</Button>
                                </React.Fragment>
                            }
                        </div>
                    </Grid.Column>

                </Grid.Row>
                <Divider style={{margin: "0"}} />

                <Grid.Row >
                    <Grid.Column>

                    <StyledDescription style={{marginRight: 10}}> 标签: </StyledDescription>
                        {
                            relationTags.map((item, index) =>

                                <Label
                                    style={{cursor: "pointer", marginRight: 10}}
                                    // color={item[0] === tag ? color : "black"}
                                    onClick={() => setTag(item.key !== tag ? item.key : null)}
                                    key={item.key}
                                    color={item.key === tag ? color : "grey"}
                                >
                                    {item.key}
                                </Label>
                            )
                        }

                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>

        <Grid columns={responsive.huge ? 8 : (responsive.large ? 6 : (responsive.middle ? 4 : 1))}>
        <Grid.Row style={{minHeight: 500}}>
            <Dimmer active={loading}>
                <Loader active={loading}>检索中...</Loader>
            </Dimmer>
                {
                    actions.map((action, index) =>
                        <Grid.Column style={{marginTop: 24}}  key={index}>
                            <div key={index}>
                                <StyledWrapper>
                                        <header>
                                            <div className="tags">
                                                {
                                                    !!action.tag && action.tag.split(",").map((_tag, _index) =>
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
                                            <Link to={`/codehub/action/${action.id}`}>
                                                <Tooltip placement="bottom" title={action.description}>
                                                    <img src={action.logo}  alt={action.title}/>
                                                </Tooltip>
                                            </Link>
                                        </header>
                                        <section>
                                            <Link to={`/codehub/action/${action.id}`}>
                                            <span title={action.name} style={{color: action.enabled ? "none" : "var(--primary-color)"}}>{action.name}</span>
                                            </Link>
                                        </section>
                                        <footer>

                                            <StyledDescription>
                                                {momentZh(action.updatedAt).fromNow()}
                                                {/*{note.description}*/}
                                            </StyledDescription>
                                        </footer>

                                </StyledWrapper>

                            </div>
                        </Grid.Column>

                    )
                }
        </Grid.Row>

        </Grid>
        <div style={{width: "100%", height: "50px", marginBottom: 20}}>
            <div style={{float: "right"}}>
                <StyledDescription style={{marginRight: 10}}> 页码: </StyledDescription>
                <Pagination
                    // defaultActivePage={5}
                    inverted
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
        </div>
    </StyledPageLoading>;
}

export default Actions;