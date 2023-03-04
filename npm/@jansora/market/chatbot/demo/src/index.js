import React from 'react'
import {createRoot} from "react-dom/client";
// import MaterialApp from "@jansora/material/es/mount";
import MountGlobal from "@jansora/global/lib/mount";
import Material from "../../src";
import MaterialAside from "@jansora/material/es/layout/aside/MaterialAside";
import MaterialFooter from "@jansora/material/es/layout/footer/MaterialFooter";
import MaterialLayout from "@jansora/material/es/layout/MaterialLayout";
import GlobalStoreProvider from "@jansora/global";
import {BrowserRouter} from "react-router-dom";
// import '@jansora/material/es/init.less'


export default function Demo ()  {


  return  <GlobalStoreProvider>
    <BrowserRouter>
      <MountGlobal />
      {/*<MountMaterial />*/}
      {/*<MaterialHeader />*/}
      <MaterialAside />
      <MaterialLayout>
        <Material />
        <MaterialFooter/>
      </MaterialLayout>;
    </BrowserRouter>
  </GlobalStoreProvider>
}

createRoot(document.querySelector('#root')).render(<><Demo/></>);