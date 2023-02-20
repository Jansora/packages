import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Dimmer, Dropdown, Form, Grid, Input, Label, Loader, Segment, Select} from "semantic-ui-react";
import {useParams} from 'react-router-dom';

import {FetchAction, FetchClassifies, FetchLogos, FetchTags, InsertAction, UpdateAction} from "../request/action";
import styled from 'styled-components'
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {useDebounceFn} from "ahooks";
// import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import ActionRender from "./ActionRender";
import {useNavigate} from "react-router";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

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
const SaveAction = (props) => {

  // console.log("SaveAction", props)

  const navigate = useNavigate();
  const {id} = useParams();
  const color = GetColor()
  const [action, actionLoading] = FetchAction(id)

  const [name, setName] = useState('a');

  const [description, setDescription] = useState( 'c');
  const [logo, setLogo] = useState( 'd');
  const [tag, setTag] = useState([]);
  const [enabled, setEnabled] = useState(true);
  const [classify, setClassify] = useState(1);

  const [variable, setVariable] = useState({language: "html"});




  const [raw, setRaw] = useState('');
  // const [rawInit, setRawInit] = useState(!id);
  const [logos] = FetchLogos();
  const [tags, setTags, tagsLoading] = FetchTags();
  const [classifies, classifiesLoading] = FetchClassifies();

  const dark = GetDarkMode();


  useEffect(() => {

    if(!!id) {
      setName(action.name);

      setDescription(action.description);
      setLogo(action.logo);
      setTag(!!action.tag ? action.tag.split(",") : []);
      setEnabled(action.enabled);
      setClassify(action.classify);
      setRaw(!!action.raw ? action.raw : '');
      // setRawInit(true)
      setClassify(action.classify);

      updateVar(action.variable)

      console.log("xx", !!action.raw ? action.raw : '')
    }


  },[id, action])


  const updateVar = (value) => {

    // console.log("????", value)
    try{
      // eslint-disable-next-line
      const Var = Function('"use strict";return (' + value + ')')();

      if (!Var.language) {
        Var.language = "html"
      }
      setVariable(Var)
    } catch (e) {
      // setVARS(initVar);
      // console.error(e)

    }
  }

  const save = () => {
    const args = {
      enabled, classify, id, name, description, variable : JSON.stringify(variable, null, 2),
      tag: `${!!tag ? tag.join(",") : ''}`, logo, raw
    };
    const callback = (data) => {
      navigate(`/codehub/action/${data.id}`)
    };
    if(!id) {
      InsertAction(args, callback);
    } else {
      UpdateAction(args, callback);
    }
  }


  const {run: updateVarDebounce} = useDebounceFn(
    (value) => updateVar(value),
    {
      wait: 1000,
    },
  );
  const {run: setRawDebounce} = useDebounceFn(
    setRaw,
    {
      wait: 1000,
    },
  );

  SetDescription(!id ? "新建模板" : `更新模板 - ${name}`)

  if(id && actionLoading) {
    return  <Dimmer inverted>
      <Loader active inline='centered' />
    </Dimmer>
  }

  return <React.Fragment>

    <Grid columns='equal'>

      <Grid.Column>
        <Form  inverted={dark}>
          <Form.Group widths='equal' >
            <Form.Field
                width={4}
                control={Input}
                label='名称'
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder='请输入名称'
            />
            <Form.Field
                width={3}
                loading={classifiesLoading}
                control={Select}
                label='分类'
                value={classify}
                onChange={(event, {value}) => console.log(value) || setClassify(value)}
                options={classifies.map(classify_ => ({key: classify_.id, text: classify_.av, value: classify_.bv}))}
                placeholder='请选择分类'
            />
            <Form.Field required width={5}>
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
            <Form.Field required
                        width={4}>
              <label>引导图片</label>
              <StyledDropdown
                  onChange={(e, { value }) => setLogo(value)}
                  options={logos.map((l, index) => {return {key: index, text: `${l.key}` ,
                    value: l.value}})}
                  placeholder='选择Logo'
                  search
                  selection
                  additionLabel={<StyledDescription>自定义标签</StyledDescription>}
                  value={logo}
              />
            </Form.Field>
            <Form.Field width={2}>
              <label>{"权限"}</label>
              <div style={{display: "flex", alignItems: "center", height: "38px"}}>
                <Checkbox label={"公开"} checked={enabled} onChange={(_, {checked}) => setEnabled(checked)} />
              </div>
            </Form.Field>
            <Form.Field width={!!id ? 3 : 2}>
              <label>操作</label>
              <div style={{display: "flex", alignItems: "center"}}>
                <Button style={{marginRight: 20}} color={color} content={!id ? '新建组件' : "更新组件"} onClick={() => save()} />
              </div>
            </Form.Field>
          </Form.Group>
        </Form>

      </Grid.Column>
    </Grid>

    <Grid style={{marginTop: 0}} >
      <Grid.Column width={5}>
        <Grid>
          <Grid.Column width={16} >
            <Segment style={{padding: 0}} fuild>
              <Label attached='top' color={color}>变量</Label>
              <CodeEditor
                  force={false}
                  id={"action-variable-edit"}
                  language={"json"}
                  value={JSON.stringify(variable, null, 2)}
                  onChange={updateVarDebounce}
                  style={{height: 350}}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={16}  >
            <Segment style={{padding: 0}}>
              <Label attached='top' color={color}>模板</Label>
              <CodeEditor
                  force={false}
                  id={"action-raw-edit"}
                  language={"xml"}
                  value={raw}
                  onChange={setRawDebounce}
                  style={{height: 350}}
              />

            </Segment>
          </Grid.Column>
        </Grid>

      </Grid.Column>
      <Grid.Column width={11} style={{paddingRight: 0}}>
        <Segment inverted>
          <Label attached='top' color={color}>预览</Label>
          <ActionRender template={raw} variable={variable} style={{height: 600}} />

        </Segment>

      </Grid.Column>
    </Grid>



  </React.Fragment>;
}

export default SaveAction;
