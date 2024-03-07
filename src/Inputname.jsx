import React from 'react'
import { useState } from 'react'

function Inputname() {
    const [name, setName] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={name} onChange={(e) => handleName(e)} />
        </div>
    )
}

export default Inputname