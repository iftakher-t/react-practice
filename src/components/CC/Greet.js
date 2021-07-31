import React, { Component } from 'react'

export default class Greet extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.name} --- age: {this.age}</h1>
                {/* {this.children} */}
            </div>
        )
    }
}

// export default  Greet