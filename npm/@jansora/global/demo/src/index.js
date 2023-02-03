import React, {useState} from 'react'
import {render} from 'react-dom'
import GlobalStoreProvider from '../../src'

export default function Demo ()  {
  const [raw, setRaw] = useState('');

  return  <GlobalStoreProvider>
    <h1>@jansora/global Demo</h1>
  </GlobalStoreProvider>


}

render(<Demo/>, document.querySelector('#demo'))
