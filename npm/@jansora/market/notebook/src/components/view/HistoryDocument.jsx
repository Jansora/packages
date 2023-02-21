import React, {useEffect} from 'react';
import {Timeline, Tooltip} from "antd";
import {FetchHistoryNote, FetchHistoryNotes} from "../../request/notebook";
// import StyledDescription from "../styled/base/StyledDescription";
// import DiffEditor from "../editor/code-editor/DiffEditor";
import {DiffEditor} from "@jansora/monaco/lib";
import {Button, Checkbox, Divider, Grid, Header, Label, Modal, Segment} from "semantic-ui-react";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {momentZh} from "@jansora/material/es/components/utils";

import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import FlexPadding from "@jansora/material/es/components/styled/base/FlexPadding";
import StyledText from "@jansora/material/es/components/styled/base/StyledText";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const HistoryDocument = ({id, document, setDocument}) => {

    const color = GetColor()
    const [visible, setVisible] = React.useState(false);
    const [draftVisible, setDraftVisible] = React.useState(false);
    const [documentVersionId, setDocumentVersionId] = React.useState(null);

    const [documentVersions]  = FetchHistoryNotes(id);

    const [documentVersion]  = FetchHistoryNote(documentVersionId);

    useEffect(() => {

    }, [documentVersion])



    if (!id) {
        return null;
    }

    return (


            <Modal
                onClose={() => setVisible(false)}
                onOpen={() => setVisible(true)}
                open={visible}
                dimmer={'blurring'}
                trigger={ <Button onClick={() => setVisible(true)} basic color={color}>历史</Button>}
                style={{width: '80vw'}}
            >


                    <Segment inverted>
                        <Header as='h3' textAlign='center'>历史文档列表</Header>
                        <Grid columns='equal' style={{height: "calc(80vh - 160px)"}}>
                            <Grid.Column width={3}>
                                <div>

                                        <Checkbox
                                            inverted
                                            style={{}}

                                            toggle
                                            checked={draftVisible} onChange={(_, {checked}) => setDraftVisible(checked)}>

                                        </Checkbox>
                                    <StyledText style={{margin: '0 0 2px 10px', display: "inline-block"}}>
                                        {draftVisible ? '展示草稿版本1' : '不展示草稿版本'}
                                    </StyledText>

                                </div>
                                <Divider />
                                <Timeline mode="right"  style={{height: "calc(80vh - 200px)", padding: 16, overflowY: "auto"}}>
                                    {
                                        documentVersions
                                            .filter( documentVersion => documentVersion.status === 'P' || draftVisible )
                                            .map(documentVersion => <Timeline.Item key={documentVersion.id} style={{minHeight: 32}} color='#00B42A' label={
                                                <Tooltip title={documentVersion.updatedAt}>
                                                    <StyledDescription>{momentZh(documentVersion.updatedAt).fromNow()} </StyledDescription>
                                                </Tooltip>
                                            }>


                                                        <Label
                                                            style={{cursor: "pointer"}}
                                                            color={documentVersion.status === 'P' ? color : null}
                                                            onClick={() => setDocumentVersionId(documentVersion.id)}
                                                        >
                                                            {documentVersion.status === 'P' ? "发布" : "草稿"}版本
                                                        </Label>



                                            </Timeline.Item>)
                                    }

                                </Timeline>

                            </Grid.Column>
                            <Grid.Column>
                                <DiffEditor
                                    modified={{data: !!documentVersion ? documentVersion.raw : "", language: 'markdown'}}
                                    original={{data: document, language: 'markdown'}} />
                            </Grid.Column>
                        </Grid>
                        <div style={{display: "flex", margin: "16px"}}>
                            <FlexPadding />
                            <Button floated={"right"} color='black' onClick={() => setVisible(false)}>
                                取消
                            </Button>
                            <Button
                                onClick={() => {
                                    if (!!documentVersion) {
                                        setDocument && setDocument(documentVersion.raw)
                                    }
                                    setVisible(false)
                                }}
                                positive
                            >
                                恢复到该版本
                            </Button>

                        </div>

                    </Segment>



            </Modal>

    );

}

export default HistoryDocument;