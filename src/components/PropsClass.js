import React, { Component } from 'react'

export default class PropsClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    countChangeHandlers() {
        
    }
    
    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button></button>
            </div>
        )
    }
}
