import React, {useContext} from 'react'
import {render} from 'react-dom'

import "@jansora/global/es/init.less";

import '../../src/init.less'
// import GlobalStoreProvider from "@jansora/global/es/store/global";
// import {GlobalStore} from "@jansora/global/es/store/global";
import GlobalStoreProvider from "@jansora/global";
// import {render} from "react-dom";
import {GlobalStore} from "@jansora/global/es/store/global";

export default function Demo ()  {
  console.log("store", useContext(GlobalStore))
  return <div>
    {/*<DefaultApp />*/}
  </div>
}

render(<GlobalStoreProvider><Demo/></GlobalStoreProvider>, document.querySelector('#demo'))
