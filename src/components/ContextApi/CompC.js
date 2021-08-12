import React, { Component } from 'react'
import {UserConsumer} from './Context/UserContext'
 class CompC extends Component {
    
    render() {
        return (
            // 1st way to use context Api
            <UserConsumer>
                {
                    (value)=> (
                        <>
                        {
                            value.isLoggedIn ? <h1> Welcome {value.name}</h1> : <h1>Please LogIn</h1>
                        }
                        <button onClick={ () => value.login()}> Login</button>
                        <br/>
                        <button onClick={ () => value.logout()}> Logout</button>
                        </>
                    )
                    }
            </UserConsumer>
        )
    }
}

export default CompC