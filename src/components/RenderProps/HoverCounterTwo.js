import React from 'react'

class HoverCounterTwo extends React.Component{

    render(){
        const {count, Increment } = this.props
        return <h3 onMouseOver = {Increment}> Hovered {count}</h3>

    }
}

export default HoverCounterTwo