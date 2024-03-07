import React from 'react';
import Inputname from './Inputname';
import Inputsrname from './Inputsrname';
import Inputage from './Inputage';
import Inputgender from './Inputgender';
function form() {
    return (
        <div>
            <Inputname />
            <Inputsrname />
            <Inputage/>
            <Inputgender/>

        </div>
    )
}

export default form