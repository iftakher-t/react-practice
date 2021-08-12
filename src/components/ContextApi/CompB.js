import React, { Component } from 'react'
import CompC from './CompC'
import { UserConsumer } from './Context/UserContext'

 class CompB extends Component {

    render() {
        return (
            <UserConsumer>
                {
                    (value) =>(
                        <>
                        <h2> I am from B {value.name} </h2>
                        <CompC />
                        </>
                    )
                }
            </UserConsumer>
        )
    }
}

export default CompB