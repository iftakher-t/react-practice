import React, {useReducer}from 'react'

const inititalState = 0
const reducer = (state, action) => {
    
}
function CounterCompOne() {
    useReducer(reducer, inititalState);

    return (
        <div>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}

export default CounterCompOne