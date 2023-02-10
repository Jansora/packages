import React from 'react'
import {createRoot} from 'react-dom/client'

import DefaultApp from "../../src/DefaultApp";

export default function Demo ()  {
  return  <DefaultApp />
}

createRoot(document.querySelector('#demo')).render(<><Demo/></>);

// render(<><Demo/></>, document.querySelector('#demo'))
