import React, {useEffect, useState} from 'react';
import {Grid, Label, Segment} from "semantic-ui-react";
import ComponentRender from "../ComponentRender";
import {useParams} from "react-router-dom";

import {useDebounceFn} from "ahooks";
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

/**
 * <Description> Description for Demo <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/14 22:56:07 <br>
 * @since 1.0 <br>
 */
const updateVar = (value) => {

  try{
    // eslint-disable-next-line
    const Var = Function('"use strict";return (' + value + ')')();
    if (!Var.language) {
      Var.language = "html"
    }
    return Var

  } catch (e) {

  }
  return {}
}

const Demo = ({component}) => {

  const {id} = useParams();
  const color = GetColor()
  const dark = GetDarkMode();

  const [variable, setVariable] = useState(component.variable ? updateVar(component.variable) : {language: "html"});


  const [raw, setRaw] = useState(component.raw ? component.raw : '');


  useEffect(() => {

    if(!!id) {
      setVariable(updateVar(component.variable))
    }


  },[id, component])



  const {run: updateVarDebounce} = useDebounceFn(
    (value) => setVariable(updateVar(value)),
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


  return <React.Fragment>
    <Grid>
      <Grid.Column width={7} style={{paddingLeft: 0, paddingRight: 0}}>

        <Segment style={{padding: 0}}>
          <Label attached='top' color={color}>变量</Label>
          <CodeEditor
            dark={dark}
            force={false}
            id={"component-variable-edit"}
            language={"json"}
            value={JSON.stringify(variable, null, 2)}
            onChange={updateVarDebounce}
            style={{height: 350}}
          />
        </Segment>
        <Segment style={{padding: 0}}>
          <Label attached='top' color={color}>模板(不可编辑)</Label>
          <CodeEditor
              dark={dark}
            force={false}
            readOnly={true}
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
          <Label attached='top' color={color}>预览(不可编辑)</Label>
          <ComponentRender template={raw} variable={variable} style={{height: 745}} />
        </Segment>

      </Grid.Column>
    </Grid>
  </React.Fragment>;
}

export default Demo;