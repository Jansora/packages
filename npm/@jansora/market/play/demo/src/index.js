import React from 'react'
import {createRoot} from "react-dom/client";
import MaterialApp from "@jansora/material/es/MaterialApp";
import MountGlobal from "@jansora/global/lib/mount";
import MountMaterial from "@jansora/material/es/mount";
import CodeHub from "../../src";
import MaterialHeader from "@jansora/material/es/layout/header/MaterialHeader";
import MaterialAside from "@jansora/material/es/layout/aside/MaterialAside";
import StyledLayout from "@jansora/material/es/components/styled/StyledLayout";
import MaterialFooter from "@jansora/material/es/layout/footer/MaterialFooter";
import MaterialLayout from "@jansora/material/es/layout/MaterialLayout";

export default function Demo ()  {
  return  <MaterialApp>
    <MountGlobal />
    <MountMaterial />
    <MaterialLayout>
      <MaterialHeader />
      <MaterialAside />
      <StyledLayout id="layout">
        <CodeHub />

      </StyledLayout>
      <MaterialFooter/>
    </MaterialLayout>;
    {/*<Layout />*/}
    {/*<Hooks />*/}
  </MaterialApp>
}

createRoot(document.querySelector('#root')).render(<><Demo/></>);