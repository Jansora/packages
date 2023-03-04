import React, {useContext, useState} from 'react'
// import {createRoot, render} from 'react-dom'
import {Viewer} from '../../src'
import GlobalStoreProvider from "@jansora/global";
import Mount from "@jansora/global/es/mount";
import {render} from "react-dom";
import {GlobalStore} from "@jansora/global/es/store/global";
import {content} from "./text";
// import {GlobalStore} from "@jansora/global2/lib/store/global";
import '@jansora/global/lib/theme.less'
import '@jansora/global/lib/color.less'

export default function Demo ()  {
  console.log("store", useContext(GlobalStore))
  const [raw, setRaw] = useState(content)

  return <div>
    <Mount />
    <h1>@jansora/bytemd Demo</h1>
    <Viewer
        style={{width: "100%"}}
        height={"700px"}
        value={raw}
        setValue={(v) => {setRaw(v)}}
    />
  </div>

}
// createRoot(document.querySelector('#demo')).render(<GlobalStoreProvider><Demo/></GlobalStoreProvider>);

 render(<GlobalStoreProvider ><Demo/></GlobalStoreProvider>, document.querySelector('#root'))
