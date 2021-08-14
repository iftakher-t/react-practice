import React from 'react'

// class Tag extends React.Component {

// render(){
//     const{value}= this.props
//     return (
//         value.length ? value.map( (dispTag, index) => (
//         <div className="tag" key={index} >
//             <h3>{dispTag }</h3>
//             <button className='button' onClick={this.props.removeTag.bind(null, index)}>x</button>
//         </div>)) : null
//         )
// }
// }
// export default Tag 


function Tag (props) {
const{value} = props
return (
    value.length ? value.map( (dispTag, index) => (
    <div className="tag" key={index} >
        <h3>{dispTag }</h3>
        <button className='button' onClick={ () => props.removeTag(index)}>x</button>
    </div>)) : null
    )
}
export default Tag 