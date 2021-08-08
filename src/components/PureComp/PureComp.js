import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure')
        return (
            <div>
                <h1>From Pure Component : {this.props.name} </h1>
            </div>
        )
    }
}

export default PureComp
