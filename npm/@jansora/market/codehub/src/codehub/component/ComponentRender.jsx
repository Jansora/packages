import React, {useEffect} from 'react';
import {FetchRenderComponent} from "../request/component";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

/**
 * <Description> Description for ComponentRender <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/6 17:34:14 <br>
 * @since 1.0 <br>
 */

const ComponentRender = ({template, variable, style}) => {


  const dark = GetDarkMode();
  // eslint-disable-next-line
  const [raw, _, __, setLoading] = FetchRenderComponent(template, variable);

  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line
  }, [template, variable])


  return <React.Fragment>
    <CodeEditor
        dark={dark}
      readOnly={true}
      force={true}
      id={"component-raw-render"}
      language={(variable && variable.language) ? variable.language : "html"}
      value={raw}
      style={style ? style : {}}
    />
  </React.Fragment>;
}

export default ComponentRender;