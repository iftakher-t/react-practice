import React, { Component } from 'react'

export default class Greet extends Component {
    
    render() {
        const{ name, age, children } = this.props
        return (
            <div>
                {/* <h1> Name: {this.props.name} --- age: {this.props.age}</h1> */}
                <h1> Name: {name} --- age: {age}</h1>
                {children}
            </div>
        )
    }
}

// export default  Greet