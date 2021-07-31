
import React, {userContext} from 'react'
import { userContext } from './Parent'

function ChildA() {
    const user = useContext(userContext)
    const product = useContext(productsContext)
    return (
        <>
           <h1> Hello I am {user.name}-{user.age} </h1> 
           <h1> product: {product.name}</h1> 
        </>
    )
}

export default ChildA