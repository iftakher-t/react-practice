import React from 'react';

function ColorComp ({ name }){
    if(name === 'Black'){
        throw new Error(' Color is not Valid')
    }

    return (
        <div>
          <h1> {name}</h1> 
        </div>
    )
}

export default ColorComp