import React from 'react'

class ClickCounterTwo extends React.Component{

    render(){
        const {count, Increment } = this.props
        return <button onClick = {Increment}> Count {count}</button>

    }
}

export default ClickCounterTwo