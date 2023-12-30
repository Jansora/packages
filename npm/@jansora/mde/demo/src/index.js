import React, {useState} from 'react'
import {createRoot} from "react-dom/client";
import {Editor} from "../../src/index";
import {Viewer} from "../../src";

export default function Demo ()  {
  const [raw, setRaw] = useState('');


  return <div style={{width: 900, height: 800, padding: 16}}>

    <Viewer
        value={"# abc1"}
        dark={true}
        // modified={{data: "a" , language: 'markdown'}}
        // original={{data: "b", language: 'markdown'}}
    />


  </div>


}

createRoot(document.querySelector('#root')).render(<><Demo/></>);