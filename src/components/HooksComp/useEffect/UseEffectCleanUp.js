import React, { useState , useEffect} from 'react'

function UseEffectCleanUp (){
    const [ x , setX] = useState(0)
    const [ y , setY] = useState(0)

    const LogMouseMove = e => {
            setX(e.clientX)
            setY(e.clientY)
            
        console.log('Mouse Move')
    }
    // componentDidMount & componentDidUpdate 
    useEffect( ()=>{
        console.log('Mouse move')
        window.addEventListener( 'mousemove', LogMouseMove )

       return() => window.removeEventListener( 'mousemove', LogMouseMove ) // & will unmount
    },[] )

    return( <div>
           <h2>  x : {x}  y: {y}</h2>
        </div>
    )
}

export default UseEffectCleanUp