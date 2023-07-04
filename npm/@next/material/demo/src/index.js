import React from 'react'
import {createRoot} from 'react-dom/client'
import MaterialApp from "../../src/MaterialApp";

export default function Demo ()  {
  return  <MaterialApp />
}

createRoot(document.querySelector('#root')).render(<><Demo/></>);

// render(<><Demo/></>, document.querySelector('#demo'))
