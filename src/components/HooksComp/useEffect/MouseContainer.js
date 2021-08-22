import React, { useState } from 'react'
import UseEffectCleanUp from './UseEffectCleanUp'

function MouseContainer (){
    const [ show , setShow] = useState(true)

    return( <div>
            <button onClick = { ( ) => setShow(!show) }> ToggleViewer </button>
            {show && <UseEffectCleanUp />}
        </div>
    )
}

export default MouseContainer