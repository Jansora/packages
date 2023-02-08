import React, {useState} from 'react'
import {render} from 'react-dom'


export default function Demo ()  {
  const [raw, setRaw] = useState('');

  console.log("store-GlobalStore", 'store')

  return <div>
    <h1>@jansora/global Demo</h1>
  </div>


}

render(<><Demo/></>, document.querySelector('#demo'))
