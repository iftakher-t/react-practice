import React, { Component } from 'react'
import CompB from './CompB'
import UserContext from './Context/UserContext'

 class CompA extends Component {
// 3rd way to use context Api
static contextType = UserContext  // cannot use multiple contexts
    render() {
        return (
            <div>
                <h1 style={{color:'green'}}> {this.context.name} {this.context.age} </h1>
                <CompB />
            </div>
        )
    }
}

// CompA.contextType = UserContext  // 2nd way to use context Api
export default CompA