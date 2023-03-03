import React, {useContext, useState} from 'react'
// import {createRoot, render} from 'react-dom'
import {Editor} from '../../src'
import GlobalStoreProvider from "@jansora/global";
import Mount from "@jansora/global/es/mount";
import {render} from "react-dom";
import {GlobalStore} from "@jansora/global/es/store/global";
import {content} from "./text";
// import {GlobalStore} from "@jansora/global2/lib/store/global";


export default function Demo ()  {
  console.log("store", useContext(GlobalStore))
  const [raw, setRaw] = useState(content)

  return <div>
    <Mount />
    <h1>@jansora/bytemd Demo</h1>
    <Editor
        style={{width: "100%"}}
        height={"700px"}
        value={raw}
        setValue={(v) => {setRaw(v)}}
    />
  </div>

}
// createRoot(document.querySelector('#demo')).render(<GlobalStoreProvider><Demo/></GlobalStoreProvider>);

 render(<GlobalStoreProvider ><Demo/></GlobalStoreProvider>, document.querySelector('#root'))
