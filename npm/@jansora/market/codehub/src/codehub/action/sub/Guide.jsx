import React from 'react';
import GetColor from "@jansora/material/es/hooks/getter/GetColor";
import {Label, Segment} from "semantic-ui-react";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

/**
 * <Description> Description for Guide <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/15 00:43:23 <br>
 * @since 1.0 <br>
 */

const Guide = ({action}) => {
  const color = GetColor()
  const dark = GetDarkMode();
  return <React.Fragment>
    <Segment style={{padding: 0}}>
      <Label attached='top' color={color}>使用方法</Label>
      <CodeEditor
          dark={dark}
        force={false}
        readOnly={true}
        id={"action-raw-edit"}
        language={"xml"}
        value={`<${action.actionCode} version=${action.versionId} args=${action.variable} />`}
        style={{height: 509}}
      />

    </Segment>
  </React.Fragment>;
}

export default Guide;