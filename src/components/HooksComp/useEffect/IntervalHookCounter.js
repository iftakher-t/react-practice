import React, { useState, useEffect } from 'react'

function IntervalHookCounter (){
    const [ count , setCount] = useState(0)

   const tick = () => {
        // setCount( count +1)
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() =>{
     let interval =   setInterval(tick, 1000)

     return () => clearInterval(interval)
    },[]) // No need [count]  if use prevCount 
    
        return (
            <div>
            <h2>Count - { count }</h2>
            </div>
        )
    }

export default IntervalHookCounter