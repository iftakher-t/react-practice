import React, { Component } from 'react'

export class StateClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome Rok'
        }
    }

    chamgeMessage(){
        this.setState({ 
            message:" Hello Rok"
        })
    }
    
    render() {
        return (
            <div>
                <h2> {this.state.message}</h2>
                <button onClick={ ()=> this.chamgeMessage()}> click </button>
            </div>
        )
    }
}

export default StateClass
