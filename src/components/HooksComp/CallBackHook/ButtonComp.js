import React from 'react'

function ButtonComp({handleClick, children}) {
    return (
        <button onClick={ handleClick }>{children}</button>
    )
}

export default ButtonComp