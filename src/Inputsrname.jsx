import React from 'react'
import { useState } from 'react'

function Inputsrname() {
    const [surname,setSurname] = useState ('')
    const handleSurname = (e)=>{
       setSurname(e.target.value)
    }
  return (
    <div>
        <label htmlFor="surname">Surname</label>
        <input type="text" id='surname' name='surname' value={surname} onChange={(e)=>handleSurname(e)}/>
    </div>
  )
}

export default Inputsrname