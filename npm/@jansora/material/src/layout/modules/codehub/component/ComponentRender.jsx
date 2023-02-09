import React from 'react';
import {FetchRenderComponent} from "../../../../components/request/component";
import CodeEditor from "@jansora/monaco/es/editor/CodeEditor";

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



  const [raw] = FetchRenderComponent(template, variable);

  // useEffect(() => {
  //   setLoading(true)
  // }, [template, variable])


  return <React.Fragment>
    <CodeEditor
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