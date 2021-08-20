import React, { useState } from 'react'

function HookuseStateCounter (){
    const [ count , setCount] = useState(0)

   const increment = () =>{
        // setCount( count + 1 );
        setCount( prevCount => prevCount + 1)
    }

    return( <div>
           <h2>  Count : {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick = { () => setCount(count-1)} disabled={ count===0? true: false }>-</button>
            <button onClick = { () => setCount(0)}>Reset</button>

        </div>
    )
}

export default HookuseStateCounter