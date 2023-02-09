import React from 'react';
import {Label, Segment} from "semantic-ui-react";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import GetTheme from "../../../../../components/hooks/getter/GetTheme";


/**
 * <Description> Description for Guide <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/14 23:00:38 <br>
 * @since 1.0 <br>
 */

const Guide = ({component}) => {
  const theme = GetTheme()
  return <React.Fragment>
    <Segment style={{padding: "0", marginTop: 16}}>
      <Label attached='top' color={theme}>使用方法</Label>
      <CodeEditor
        force={false}
        readOnly={true}
        id={"component-raw-edit"}
        language={"xml"}
        value={`<${component.code} version=${component.versionId} args=${component.variable} />`}
        style={{height: 509}}
      />

    </Segment>
  </React.Fragment>;
}

export default Guide;