import React from 'react'
import {createRoot} from 'react-dom/client'
import MaterialApp from "../../src/MaterialApp";

export default function Demo ()  {
  return  <MaterialApp />
}

createRoot(document.querySelector('#demo')).render(<><Demo/></>);

// render(<><Demo/></>, document.querySelector('#demo'))
