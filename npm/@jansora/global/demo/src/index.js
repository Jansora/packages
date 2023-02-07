import React, {useContext, useState} from 'react'
import {render} from 'react-dom'
import GlobalStoreProvider from '../../es'
import {GlobalStore} from "../../es/store/global";

export default function Demo ()  {
  const [raw, setRaw] = useState('');
  const store = useContext(GlobalStore)
  console.log("store", store)

  return <div>
    <h1>@jansora/global Demo</h1>
  </div>


}

render(<GlobalStoreProvider><Demo/></GlobalStoreProvider>, document.querySelector('#demo'))
