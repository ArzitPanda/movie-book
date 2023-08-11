import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {

const data =useSelector(state=>state);
console.log(data)


  return (
    <div>
        hello
    </div>
  )
}

export default App
