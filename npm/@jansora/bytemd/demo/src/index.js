import React, {useState} from 'react'
import {render} from 'react-dom'

import {Editor} from '../../src'

export default function Demo ()  {
  const [raw, setRaw] = useState('');


  return <div>
    <h1>@jansora/bytemd Demo</h1>
    <Editor
        style={{width: "100%"}}
        value={raw}
        setValue={(v) => {setRaw(v)}}
    />
  </div>

}

render(<Demo/>, document.querySelector('#demo'))
