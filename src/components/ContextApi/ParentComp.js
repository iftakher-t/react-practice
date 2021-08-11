import React, { Component } from 'react'
import CompA from './CompA'
import UserProvider from './Contex/UserContex'

 class ParentComp extends Component {
        state = {
            name: 'Iftakher'
        }
    render() {
        return (
           <UserProvider value = {this.state.name} >
                <CompA />
           </UserProvider>
        )
    }
}

export default ParentComp