import React, {useEffect, useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';
import SetDescription from "../../../components/hooks/setter/SetDescription";
// import {Section, Head, SubHead, FlexPadding} from "../../../components/styled/frameworks";
// import {Editor} from "../../../components/editor/md-editor/bytemd";
import {Editor} from "@jansora/bytemd";
import {
    FetchClassifies,
    FetchEditableNote,
    FetchLogos,
    FetchTags,
    InsertNote,
    UpdateNote,
    UpdateNoteDraft
} from "../../../components/request/notebook";

import {useDebounceFn} from "ahooks";
import CenterHeader from "../../header/CenterHeader";
import HistoryDocument from "../../../components/view/HistoryDocument";
import {Button, Checkbox, Dropdown, Form, Grid, Input, Loader, Segment, Select} from "semantic-ui-react";
import styled from "styled-components";
import StyledDescription from "../../../components/styled/base/StyledDescription";
import GetTheme from "../../../components/hooks/getter/GetTheme";
import {Alert} from "antd";
import {UploadFiles} from "../../../components/request/utils";


/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 16:26:57
 */

const StyledDropdown = styled(Dropdown)`
  :hover {
    //z-index: 1001 !important;
  }
  div.ui.active.visible.dropdown {
  
  }

`

const SaveNote = (props) => {


  const navigate = useNavigate();
  const {id} = useParams();
  const color = GetTheme();

  const [note, noteLoading] = FetchEditableNote(id)

  const [name, setName] = useState('');
  const [description, setDescription] = useState( '');
  const [logo, setLogo] = useState( '');
  const [tag, setTag] = useState([]);
  const [enabled, setEnabled] = useState(true);
  const [classify, setClassify] = useState("");
  const [raw, setRaw] = useState('');
  const [rawInit, setRawInit] = useState(!id);
  const [logos, setLogos, logosLoading] = FetchLogos();
  const [tags, setTags, tagsLoading] = FetchTags();
  const [classifies, classifiesLoading] = FetchClassifies();
  const [autoAlert, setAutoAlert] = useState('')

  useEffect(() => {
    if(!!id) {
      setName(note.name);
      setDescription(note.description);
      setLogo(note.logo + "___" + note.name);
      setTag(!!note.tag ? note.tag.split(",") : []);
      setEnabled(note.enabled);
      setClassify(note.classify);
      setRaw(!!note.raw ? note.raw : '');
      setRawInit(true)
      setClassify(note.classify);
    }

  },[id, note])

  const save = () => {
    const args = {
      enabled, classify, id,
      name, description, tag: `${!!tag ? tag.join(",") : ''}`, logo: logo.split("___")[0], raw
    };
    const callback = (data) => navigate(`/notebook/${data.id}`);
    if(!id) {
      InsertNote(args, callback);
    } else {
      UpdateNote(args, callback);
    }
  }
  const autoSaveFn = () => {
    const args = {
      id, raw
    };
    const callback = (note) => {
      setAutoAlert(`自动保存于 ${note.updatedAt}`)
    };
    if(!!id && raw !== note.raw) {
      UpdateNoteDraft(args, callback);
    }
  }
  const { run } = useDebounceFn(
      autoSaveFn,
      {
        wait: 3000,
      },
  );

  SetDescription(!id ? "新建笔记" : `更新笔记 - ${name}`)

  if (!!id && noteLoading) {
    return <Segment inverted>
      <Loader active />
    </Segment>
  }
  return <React.Fragment>
    <Grid columns='equal'>

        <Grid.Column>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Field
                  width={4}
                  control={Input}
                  label='标题'
                  value={name}
                  onChange={event => setName(event.target.value)}
                  placeholder='请输入标题'
              />

              <Form.Field
                  width={4}
                  loading={classifiesLoading}
                  control={Select}
                  label='分类'
                  value={classify}
                  onChange={(event, {value}) => console.log(value) || setClassify(value)}
                  options={classifies.map(classify_ => ({key: classify_.id, text: classify_.av, value: classify_.av}))}
                  placeholder='请选择分类'
              />

              <Form.Field required width={6}>
                <label>画像</label>
                <StyledDropdown
                    loading={tagsLoading}
                    onAddItem={(e, { value }) => {
                      if(tags.filter(tag => tag.key === value).length === 0) {
                        setTags(tags.concat([{key: value, value: 1}]))
                      }
                    }}
                    onChange={(e, { value }) => setTag(value)  }
                    options={tags.map(tag_ => {return {key: tag_.key, text: tag_.key, value: tag_.key}})}
                    placeholder={'添加画像'}
                    search
                    selection
                    multiple
                    allowAdditions
                    additionLabel={<StyledDescription>自定义标签</StyledDescription>}
                    value={tag}
                    renderLabel={(label) => ({ content: label.text,})}
                />
              </Form.Field>


              <Form.Field required width={6}>
                <label>引导图片</label>
                <StyledDropdown
                    loading={logosLoading}
                    onAddItem={(e, { value }) => {
                      if(logos.filter(l => l.value === value).length === 0) {
                        setLogos(logos.concat([{value: value, key: value}]))
                      }
                    }}
                    onChange={(e, { value }) => console.log(value) || setLogo(value)}
                    options={logos.map((l, index) => {return {key: index, text: `${l.key}` ,
                      value: l.value + "___" + l.key}})}
                    placeholder='选择Logo'
                    search
                    selection
                    allowAdditions
                    additionLabel={<StyledDescription>自定义标签</StyledDescription>}
                    value={logo}
                />
              </Form.Field>
              <Form.Field
                  width={6}
                  control={Input}
                  label='简介'
                  placeholder='请输入简介'

                  value={description} onChange={event => setDescription(event.target.value)}
              />

              <Form.Field width={1}>
                <label>{"权限"}</label>
                <div style={{display: "flex", alignItems: "center", height: "38px"}}>
                  <Checkbox label={"公开"} checked={enabled} onChange={(_, {checked}) => setEnabled(checked)} />
                </div>
              </Form.Field>
              <Form.Field width={!!id ? 3 : 2}>
                <label>操作</label>
                <div style={{display: "flex", alignItems: "center"}}>
                  <Button style={{marginRight: 20}} color={color} content={'保存'} onClick={() => save()} />
                  <HistoryDocument id={id} document={raw} setDocument={setRaw} />
                </div>
              </Form.Field>
            </Form.Group>

          </Form>

        </Grid.Column>

      <Grid.Row>
        <Grid.Column>
          {/*隐藏 bug, raw 值初始化后不能被修改 */}
          {
              !!autoAlert &&  <CenterHeader>
                <Alert
                    closable
                    style={{ width: 300 }}
                    type='success'
                    message={autoAlert}
                />
              </CenterHeader>
          }
          {
              rawInit &&

              <Editor
                  uploadFn={UploadFiles}
                  style={{width: "100%"}}
                  value={raw}
                  setValue={(v) => {setRaw(v); run()}}
              />
          }
        </Grid.Column>

      </Grid.Row>
    </Grid>



  </React.Fragment>;
}

export default SaveNote;
