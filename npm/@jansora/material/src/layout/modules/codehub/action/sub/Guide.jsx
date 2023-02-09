import React from 'react';
import GetTheme from "../../../../../components/hooks/getter/GetTheme";
import {Label, Segment} from "semantic-ui-react";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";

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
  const theme = GetTheme()
  return <React.Fragment>
    <Segment style={{padding: 0}}>
      <Label attached='top' color={theme}>使用方法</Label>
      <CodeEditor
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