import React, {useEffect, useState} from 'react';
import {Divider, Dropdown, Form, Grid, Input, Label, Loader, Segment} from "semantic-ui-react";
import {useNavigate, useParams} from 'react-router-dom';

import {FetchClassifies, FetchComponent, FetchLogos, FetchTags, SaveComponentRequest} from "../request/component";
import styled from 'styled-components'

import {useDebounceFn} from "ahooks";
import ComponentRender from "./ComponentRender";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import MaterialSaveEntity from "../../../es/codehub/component/MaterialSaveEntity";
// import MaterialSaveEntity from "./MaterialSaveEntity";

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

  const dark = GetDarkMode();
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

    SaveComponentRequest(args, callback);

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

  const entities = { save, tag, setTag, tags, setTags, logos, classifies, name, setName, description, setDescription, logo, setLogo, classify, setClassify, enabled, setEnabled};

  return <StyledPageLoading>

    <Grid columns='equal'>

      <Grid.Column>
        <Form inverted inline>
          <Form.Group widths='equal'>
            <Form.Field
                width={3}
                control={Input}
                label={'编码' + (!!id && '  (不可编辑)')}
                disabled={!!id}
                value={code}
                onChange={event => setCode(event.target.value)}
                placeholder='请输入名称'
            />
            <MaterialSaveEntity {...entities} />
          </Form.Group>
        </Form>
      </Grid.Column>
    </Grid>

    <Divider style={{marginTop: 5}} />
    <Grid>
      <Grid.Column width={7}>

        <Segment style={{padding: '30px 0px 16px 0'}} inverted={dark}>
          <Label attached='top' color={color}>变量</Label>
          <CodeEditor
              dark={dark}
              force={false}
              id={"component-variable-edit"}
              language={"json"}
              value={JSON.stringify(variable, null, 2)}
              onChange={updateVarDebounce}
              style={{height: 250}}
          />
        </Segment>
        <Segment style={{padding: '30px 0px 16px 0'}} inverted={dark}>
          <Label attached='top' color={color}>模板</Label>
          <CodeEditor
              dark={dark}
              force={false}
              id={"component-raw-edit"}
              language={(variable && variable.language) ? variable.language : "html"}
              value={raw}
              onChange={setRawDebounce}
              style={{height: 250}}
          />

        </Segment>


      </Grid.Column>
      <Grid.Column width={9}>
        <Segment style={{padding: '30px 0px 16px 0'}} inverted={dark}>
          <Label attached='top' color={color}>预览</Label>
          <ComponentRender template={raw} variable={variable} style={{height: 745}} />
        </Segment>
      </Grid.Column>
    </Grid>


  </StyledPageLoading>;
}

export default SaveComponent;
