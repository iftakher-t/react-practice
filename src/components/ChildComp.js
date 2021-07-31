import React from 'react'

export default function ChildComp() {
    return (
        <div>
            <h1>{}</h1>
            <button onClick={ changeMessageHandler}> Click Me </button>
        </div>
    )
}

export default ChildComp