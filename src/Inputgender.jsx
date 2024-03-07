import React from 'react'
import { useState } from 'react'

function Inputgender() {
  const [gender,setGender]=useState('')
  const handleGender=(e)=>setGender(e.target.value)
    return (
    <div>
        <label htmlFor="gender">Gender</label>
        <input type="gender" name="gender" id="gender" value={gender} onChange={(e)=>handleGender(e)}/>
    </div>
  )
}

export default Inputgender