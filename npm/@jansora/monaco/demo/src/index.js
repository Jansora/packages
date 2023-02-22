import React, {useState} from 'react'
import {createRoot} from "react-dom/client";
import {DiffEditor} from "../../lib";

export default function Demo ()  {
  const [raw, setRaw] = useState('');


  return <div style={{width: 900, height: 800, padding: 16}}>
    {/*<CodeEditor*/}
    {/*    force={false}*/}
    {/*    id={"code-editor-template"}*/}
    {/*    language={ "javascript"}*/}
    {/*    // value={raw}*/}
    {/*    // onChange={setRaw}*/}
    {/*    style={{height: 650}}*/}
    {/*/>*/}
    <DiffEditor
        dark={true}
        modified={{data: "a" , language: 'markdown'}}
        original={{data: "b", language: 'markdown'}} />


  </div>


}

createRoot(document.querySelector('#root')).render(<><Demo/></>);