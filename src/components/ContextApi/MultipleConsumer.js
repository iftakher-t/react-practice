import React, { Component } from 'react'
import { ProductConsumer } from './Context/ProductContext'
import {UserConsumer} from './Context/UserContext'

 class ParentComp extends Component {

    render() {
        return (
            <UserConsumer>
                {
                    (value1)=> (
                        <ProductConsumer>
                            {
                                (value2)=> (
                                    <div>
                                        <h1> My name {value1.name}</h1>
                                        <h2> Product Name {value2} </h2>
                                    </div>
                                )
                            }
                        </ProductConsumer>
                    )
                }
            </UserConsumer>
        )
    }
}

export default ParentComp