import React from 'react';

import {Divider} from "antd";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import SetDescription from "../../../components/hooks/setter/SetDescription";
import {useResponsive} from "ahooks";
import StyledPageLoading from "../../../components/styled/StyledLoading";
import {Link} from "react-router-dom";
import GetLoginStatus from "../../../components/hooks/getter/GetLoginStatus";
import CenterHeader from "../../header/CenterHeader";
import {Button, Dimmer, Grid, Loader, Segment} from "semantic-ui-react";
import GetTheme from "../../../components/hooks/getter/GetTheme";
import SearchView from "../../../components/view/search/SearchView";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const Notes = (props) => {


    const color = GetTheme();
    const responsive = useResponsive();
    const loginStatus = GetLoginStatus();
    //
    // const [tag, setTag] = useState('');
    // const [classify, setClassify] = useState(null);
    // const [classifies, classifiesLoading] = FetchClassifies();
    // const [relationTags] = FetchRelationTags(classify);
    // const [pageNum, setPageNum] = useState(1);
    // const pageSize = responsive.huge ? 24 : (responsive.large ? 12 : (responsive.middle ? 8 : 6));
    // const [orderBy] = useState('updated_at');
    // const [sort] = useState('DESC');
    //
    // const [title, setTitle] = useState('');

    const {TitleView, ClassifiesView, RelationTagsView, PageView, DataView, searchHook} = SearchView('notebook');

    // const [notes, setNotes, total, setLock, loading] = FetchNotes(classify, tag, title, pageSize, pageNum, orderBy, sort, setPageNum);

    // useEffect(() => {
    //     setTag('')
    // }, [classify])
    //
    // const autoSearch = (value) => {
    //     setTitle(value)
    //     setNotes([]);setPageNum(1);setLock(false)
    // }
    //
    // const { run: search } = useDebounceFn(
    //     autoSearch,
    //     {
    //         wait: 1000,
    //     },
    // );


    SetDescription(`文章列表`)

    document.title = "记录人生旅途"

    return <StyledPageLoading>
        <CenterHeader> {TitleView} </CenterHeader>
        <Segment inverted>
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Dimmer active={searchHook.classifiesLoading}><Loader active={searchHook.classifiesLoading}/></Dimmer>
                        <StyledDescription style={{}}> 类别: </StyledDescription>
                        <ClassifiesView />
                        <div style={{float: "right"}}>
                            {
                                loginStatus && responsive.middle && <React.Fragment>
                                    <Button  size="small" color={color} style={{marginLeft: 30}} as={Link} to={"/notebook/new"}><>新建笔记</></Button>
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
        <DataView baseUrl={'/notebook'} />
        {PageView}
    </StyledPageLoading>;
}

export default Notes;