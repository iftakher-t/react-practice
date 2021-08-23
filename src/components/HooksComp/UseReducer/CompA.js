import React, {useContext}from 'react'
import {CounterContext} from './ParentComp'

function CompA() {
    const CounterContext = useContext(CounterContext)
    useReducer(reducer, inititalState);

    return (
        <div>
            <span>CompA</span>
            <button onClick={()=> countContext.countDispatch}>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}

export default CompA