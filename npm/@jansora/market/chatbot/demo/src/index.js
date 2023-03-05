import React from 'react'
import {createRoot} from "react-dom/client";
// import MaterialApp from "@jansora/material/es/mount";
import Material from "../../src";
import MaterialFooter from "@jansora/material/es/layout/footer/MaterialFooter";
import MaterialLayout from "@jansora/material/es/layout/MaterialLayout";

import MaterialApp from "@jansora/material/es/MaterialApp";
import MaterialHeader from "@jansora/material/es/layout/header/MaterialHeader";

export default function Demo ()  {


  return  <MaterialApp>
    <>
      {/*<MountGlobal />*/}
      {/*<MountMaterial />*/}
      <MaterialHeader />
      {/*<MaterialAside />*/}
      <MaterialLayout>
        <Material />
        <MaterialFooter/>
      </MaterialLayout>;
    </>
  </MaterialApp>
}

createRoot(document.querySelector('#root')).render(<><Demo/></>);