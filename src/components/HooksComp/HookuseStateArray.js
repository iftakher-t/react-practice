import React, { useState } from 'react'

function HookuseStateCounter (){
    const [ count , setCount] = useState(0)

   const increment = () =>{
        // setCount( count + 1 );
        setCount( prevCount => prevCount + 1)
    }

    return( <div>
            <input type="text" 
                    name = "userId"
                    value={userId} 
                    onChange={this.handleChange} />
                                <input type="text" 
                    name = "userId"
                    value={userId} 
                    onChange={this.handleChange} />
        
           <h2>  Count : {count} </h2>
            <button onClick={increment}>Increment</button>

        </div>
    )
}

export default HookuseStateCounter