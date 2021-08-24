import React, {useReducer}from 'react'

const inititalState = {
    firstCounter :0
}
const reducer = (state, action)=>{
    switch(action){
        case 'increment': 
            return state +1
        case 'decrement': 
            return state +1
        case 'reset': 
            return inititalState
        default:
            return state
    }
}

function CounterTwo() {
    
    const [count, dispatch] = useReducer(reducer, inititalState);

    return (
        <div>
            <div> count : { count.firstCounter }</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterTwo