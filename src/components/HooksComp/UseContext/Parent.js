import React from 'react'
import ChildA from './ChildA'
export const userContext = React.createContext()
export const product = React.createContext()

function Parent() {
    return (
        <userContext.Provider value ={{name:'Topper',age:'2'}}>
            <ChildA />
        </userContext.Provider>
    )
}

export default Parent