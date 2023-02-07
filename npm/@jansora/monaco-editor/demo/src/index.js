import React, {useState} from 'react'
import {render} from 'react-dom'
// import GlobalStoreProvider from '../../es'
// import {GlobalStore} from "../../es/store/global";

export default function Demo ()  {
  const [raw, setRaw] = useState('');
  // const store = useContext(GlobalStore)
  // console.log("store-GlobalStore", store)

  return <div>
    <h1>@jansora Demo</h1>
  </div>


}

render(<><Demo/></>, document.querySelector('#demo'))
