import React, {useReducer}from 'react'

const inititalState = 0
const reducer = (state, action) => {
    
}
function Parent() {
    const [count, dispatch] = useReducer(reducer, inititalState);

    return (
        <div>
            <h1>{count}</h1>
            <CompA />
            <CompB />
            <CompC />

        </div>
    )
}

export default Parent