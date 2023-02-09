/*
* @file DefaultLayout.jsx.jsx
* @author jansora
* @date 2020/2/12
*/


import React, {useEffect, useState} from "react";
import CodeEditorSource from "./CodeEditorSource";

// const Wrapper = styled.div`
//   width: 100%;
//   height: 500px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

const CodeEditor = (props) => {

    const language = props.language ? props.language : 'javascript';


    const [loading, setLoading] = useState(false);

    const style = props.style ? props.style  : {};

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [language])


    return (
      <div>
          {
              !loading && <CodeEditorSource {...props} style={style} language={language}/>
          }
      </div>

    )
}

export default CodeEditor;
