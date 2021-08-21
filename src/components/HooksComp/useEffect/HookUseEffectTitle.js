import React, { useState , useEffect} from 'react'

function HookuseEffectCounter (){
    const [ count , setCount] = useState(0)

    // componentDidMount & componentDidUpdate
    useEffect( ()=>{
        document.title = `You clicked ${count} times`
    })

    return( <div>
           <h2>  Count : {count} </h2>
            <button onClick = { ()=> setCount( count + 1 ) }>Increment</button>
        </div>
    )
}

export default HookuseEffectCounter