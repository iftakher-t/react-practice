import React from 'react'

function Tag(props) {

    const{value}= props

    return (
        value.length ? value.map( (dispTag, index) => (
        <div className="tag" key={index} >
            <h3>{dispTag }</h3>
            <button onClick={removeTag}>x</button>
        </div>)) : null
        )
}

export default Tag 