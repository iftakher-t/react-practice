import React, { useReducer } from 'react'
import CompA from './CompA'
import {CounterProvider} from './CounterContext'

const inititalState = 0
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
 function ParentComp () {
    const [count, dispatch ]= useReducer(reducer, inititalState);
        return (
            <CounterProvider value ={{countState: count, countDispatch: dispatch}}>
                <div>
                    Count: {count}
                    <CompA />
                </div>
            </CounterProvider>
        )
    }

export default ParentComp