import React from 'react'
import {createRoot} from 'react-dom/client'

import "@jansora/global/es/init.less";

import '../../src/init.less'
// import GlobalStoreProvider from "@jansora/global/es/store/global";
// import {GlobalStore} from "@jansora/global/es/store/global";
// import {render} from "react-dom";
import DefaultApp from "../../src/DefaultApp";

export default function Demo ()  {
  // console.log("store", useContext(GlobalStore))
  return <div>
    <DefaultApp />
  </div>
}

createRoot(document.querySelector('#demo')).render(<><Demo/></>);

// render(<><Demo/></>, document.querySelector('#demo'))
