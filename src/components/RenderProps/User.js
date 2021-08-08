import React from 'react'

class ClickCounterTwo extends React.Component{

    render(){
        return (
        <div>
            {this.props.name(true)}
        </div> 
        )

    }
}

export default ClickCounterTwo