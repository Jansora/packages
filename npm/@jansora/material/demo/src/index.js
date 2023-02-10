import React from 'react'
import {createRoot} from 'react-dom/client'
import App from "../../src/App";

export default function Demo ()  {
  return  <App />
}

createRoot(document.querySelector('#demo')).render(<><Demo/></>);

// render(<><Demo/></>, document.querySelector('#demo'))
