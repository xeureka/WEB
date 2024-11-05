import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name,setName] = useState(' ')

  // function changeName(){
  //   let fName = e.target.value;

  //   setName(fName)
  // }


  return (
    <div>
      <h1>This is CV Builder App</h1>
      <input type="text" onChange={(e) =>{
        setName(e.target.value)
        
      }} value={name.name} placeholder='Eureka'/>

      <p>{name}</p>
      
    </div>
  )
}

export default App
