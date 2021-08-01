import React, { Component } from 'react'

export default class CountreState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        this.setState( (prevState, props) => ({
        count : prevState.count + 1            
        }))
        console.log('outside',this.state.count) // 
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
            <h2>Count - { this.state.count }</h2>
            {/* <button onClick={ ()=> this.increment() }> increment </button> */}
            <button onClick={ ()=> this.incrementFive() }> incrementFive </button>
            </div>
        )
    }
}
