import React, { Component } from 'react'
import CompA from './CompA'
import MultipleConsumer from './MultipleConsumer'
import { ProductProvider } from './Context/ProductContext'
import {UserProvider} from './Context/UserContext'

 class ParentComp extends Component {
        state = {
            name: 'Iftakher',
            age:37,
            isLoggedIn:false
        }

        loginHandler = () =>{
            this.setState({
                isLoggedIn: true
            })
        }

        logoutHandler = () =>{
            this.setState({
                isLoggedIn: false
            })
        }

    render() {
        return (
           <UserProvider value = {{...this.state, login: this.loginHandler, logout: this.logoutHandler}} >
                <CompA />
                <ProductProvider value = {'Laptop'}>
                    <MultipleConsumer  />
                </ProductProvider>
           </UserProvider>
        )
    }
}

export default ParentComp