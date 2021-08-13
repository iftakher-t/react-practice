import React from 'react'

class Tag extends React.Component {



render(){
    const{value}= this.props
    return (
        value.length ? value.map( (dispTag, index) => (
        <div className="tag" key={index} >
            <h3>{dispTag }</h3>
            <button onClick={this.props.removeTag.bind(null, dispTag)}>x</button>
        </div>)) : null
        )
}
}

// 
export default Tag 