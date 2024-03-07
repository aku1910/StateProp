import React from 'react'
import { useState } from "react";
function Inputage() {
  const [age,setAge] = useState ("")
  const handleAge=(e)=>{
   setAge(e.target.value)
  }
    return (
    <div>
      <label htmlFor="age">Age</label>
      <input type="text" name="age" id="age" value={age} onChange={(e)=>handleAge(e)}/>
    </div>
  )
}

export default Inputage