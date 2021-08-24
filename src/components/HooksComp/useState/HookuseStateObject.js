import React, { useState } from 'react'

function HookuseStateObject (){
    const [ name , setName] = useState({fName:'', lName:''})

    return( <div>
            <input type="text" 
                    name = "userId"
                    value={name.fName} 
                    onChange={ (e) => setName( { ...name, fName : e.target.value} )} />
            <input type="text" 
                    name = "userId"
                    value={name.lName} 
                    onChange={ (e) => setName( { ...name, lName : e.target.value} )} />
        
           <h2>  F name : {name.fName} </h2>
           <h2>  L name : {name.lName} </h2>

        </div>
    )
}

export default HookuseStateObject