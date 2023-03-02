import React, {useEffect, useState} from 'react';
import {Dimmer, Dropdown, Form, Grid, Label, Loader, Segment} from "semantic-ui-react";
import {useParams} from 'react-router-dom';

import {FetchAction, FetchClassifies, FetchLogos, FetchTags, SaveActionRequest} from "../request/action";
import styled from 'styled-components'
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {useDebounceFn} from "ahooks";
// import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import ActionRender from "./ActionRender";
import {useNavigate} from "react-router";
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import MaterialSaveEntity from "../../../es/codehub/component/MaterialSaveEntity";

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

    SaveActionRequest(args, callback);

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
  const entities = { save, tag, setTag, tags, setTags, logos, classifies, name, setName, description, setDescription, logo, setLogo, classify, setClassify, enabled, setEnabled};

  return <StyledPageLoading>

    <Grid columns='equal'>

      <Grid.Column>
        <Form  inverted={dark}>
          <Form.Group widths='equal' >
            <MaterialSaveEntity {...entities} />
          </Form.Group>
        </Form>

      </Grid.Column>
    </Grid>

    <Grid style={{marginTop: 0}} >
            <Grid.Column width={8} >
              <Segment style={{padding: '30px 0px 16px 0'}}  inverted={dark}>
                <Label attached='top' color={color}>变量</Label>
                <CodeEditor
                    dark={dark}
                    force={false}
                    id={"action-variable-edit"}
                    language={"json"}
                    value={JSON.stringify(variable, null, 2)}
                    onChange={updateVarDebounce}
                    style={{height: 200}}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}  >
              <Segment style={{padding: '30px 0px 16px 0'}} inverted={dark}>
                <Label attached='top' color={color}>模板</Label>
                <CodeEditor
                    dark={dark}
                    force={false}
                    id={"action-raw-edit"}
                    language={"xml"}
                    value={raw}
                    onChange={setRawDebounce}
                    style={{height: 200}}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={16} style={{paddingRight: 0}}>
            <Segment  inverted={dark}>
              <Label attached='top' color={color}>预览</Label>
              <ActionRender template={raw} variable={variable} style={{height: 600}} />

            </Segment>

        </Grid.Column>
    </Grid>



  </StyledPageLoading>;
}

export default SaveAction;
