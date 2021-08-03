import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                 parentName : 'Parent'
             }

       this.greetName = this.greetName.bind(this)
    }
    
    greetName (ChildName) {
        alert(` Hello : ${this.state.parentName} from ${ ChildName}` )
    }

    render() {
        return (
            <div>
                < ChildComp greetHandler = { this.greetName } />
            </div>
        )
    }
}
