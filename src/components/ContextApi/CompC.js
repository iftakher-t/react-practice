import React, { Component } from 'react'

 class CompC extends Component {
    
    render() {
        return (
            <UserConsumer>
                {
                    (value)=> (
                        <h1> My name is {value}</h1>
                    )
                    }
            </UserConsumer>
        )
    }
}

export default CompC