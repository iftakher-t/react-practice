import React ,{ Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

render(){
const { count, Increment, name, age } = this.props
    return(
        <div>
         <h2> I am {name} and age {age} </h2> {/* this is props from App via withCounter */}
        <button onClick = { Increment }> 
            Clicked {count} times </button>
        </div>
    )
}
}

export default withCounter(ClickCounter)