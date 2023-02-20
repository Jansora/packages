import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Dropdown, Form, Grid, Input, Label, Loader, Segment, Select} from "semantic-ui-react";
import {useNavigate, useParams} from 'react-router-dom';

import {
  FetchClassifies,
  FetchComponent,
  FetchLogos,
  FetchTags,
  InsertComponent,
  UpdateComponent
} from "../request/component";
import styled from 'styled-components'

import {useDebounceFn} from "ahooks";
import ComponentRender from "./ComponentRender";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";

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
const SaveComponent = (props) => {


  const navigate = useNavigate();
  const {id} = useParams();
  const color = GetColor()
  const [component, componentLoading] = FetchComponent(id)

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState( '');
  const [logo, setLogo] = useState( '');
  const [tag, setTag] = useState([]);
  const [enabled, setEnabled] = useState(true);
  const [classify, setClassify] = useState(1);

  const [variable, setVariable] = useState({language: "html"});




  const [raw, setRaw] = useState('f');
  // const [rawInit, setRawInit] = useState(!id);
  const [logos] = FetchLogos();
  const [tags, setTags, tagsLoading] = FetchTags();
  const [classifies, classifiesLoading] = FetchClassifies();


  useEffect(() => {

    // console.log("????AAA", component)
    if(!!id && !!component.id) {
      setName(component.name);
      setCode(component.code);

      setDescription(component.description);
      setLogo(component.logo);
      setTag(!!component.tag ? component.tag.split(",") : []);
      setEnabled(component.enabled);
      setClassify(component.classify);
      setRaw(!!component.raw ? component.raw : '');
      // setRawInit(true)
      setClassify(component.classify);

      updateVar(component.variable)
    }


  },[id, component])


  const updateVar = (value) => {

    if (undefined === value) {
      return;
    }

    try{
      // eslint-disable-next-line
      const Var = Function('"use strict";return (' + value + ')')();

      // console.log("VAR", Var)
      if (!Var.language) {
        Var.language = "html"
      }
      setVariable(Var)

    } catch (e) {
      // setVARS(initVar);
      console.error(e)

    }
  }

  const save = () => {
    console.log("SAVE", variable, JSON.stringify(variable, null, 2))
    const args = {
      enabled, classify, id, code, name, description, variable : JSON.stringify(variable, null, 2),
      tag: `${!!tag ? tag.join(",") : ''}`, logo, raw
    };
    const callback = (data) => {
      navigate(`/codehub/component/${data.id}`)
    };
    if(!id) {
      InsertComponent(args, callback);
    } else {
      UpdateComponent(args, callback);
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

  SetDescription(!id ? "新建组件" : `更新组件 - ${name}`)


  if(id && componentLoading) {
    return <Loader active inline='centered' />

  }

  return <React.Fragment>

    <Grid columns='equal'>

      <Grid.Column>
        <Form inverted inline>
          <Form.Group widths='equal'>
            <Form.Field
                width={3}
              control={Input}
              label='名称'
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder='请输入名称'
            />
            <Form.Field
                width={3}
              control={Input}
              label={'编码' + (!!id && '  (不可编辑)')}
              disabled={!!id}
              value={code}
              onChange={event => setCode(event.target.value)}
              placeholder='请输入名称'
            />
            <Form.Field
                width={2}
              loading={classifiesLoading}
              control={Select}
              label='分类'
              value={classify}
              onChange={(event, {value}) => console.log(value) || setClassify(value)}
              options={classifies.map(classify_ => ({key: classify_.id, text: classify_.av, value: classify_.bv}))}
              placeholder='请选择分类'
            />
            <Form.Field required
                        width={3}>
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
                        width={2}>
              <label>引导图片</label>
              <StyledDropdown
                  // loading={logosLoading}
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
      <Grid>
        <Grid.Column width={7}>

          <Segment style={{padding: 0}}>
            <Label attached='top' color={color}>变量</Label>
            <CodeEditor
              force={false}
              id={"component-variable-edit"}
              language={"json"}
              value={JSON.stringify(variable, null, 2)}
              onChange={updateVarDebounce}
              style={{height: 350}}
            />
          </Segment>
          <Segment style={{padding: 0}}>
            <Label attached='top' color={color}>模板</Label>
            <CodeEditor
              force={false}
              id={"component-raw-edit"}
              language={(variable && variable.language) ? variable.language : "html"}
              value={raw}
              onChange={setRawDebounce}
              style={{height: 350}}
            />

          </Segment>


        </Grid.Column>
        <Grid.Column width={9}>
          <Segment style={{padding: 0}}>
            <Label attached='top' color={color}>预览</Label>
            <ComponentRender template={raw} variable={variable} style={{height: 745}} />

          </Segment>

        </Grid.Column>
      </Grid>


  </React.Fragment>;
}

export default SaveComponent;
