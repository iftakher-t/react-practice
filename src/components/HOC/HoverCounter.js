import React ,{ Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

render(){
const { count,Increment, name, age } = this.props
return(
    <h2 onMouseOver = { Increment } >
    Hovered {count} times .I am {name} and age {age} </h2>
    )
}
}

export default withCounter(HoverCounter)