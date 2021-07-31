import React, { Component } from 'react';
import withCounter from './HOC/withCounter';

class HoverCounter extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         count : 0
    //     }
    // }

    // increment(){
    //     this.setState((prevState) =>(
    //        { count : prevState.count + 1})
    //     )
    // }
    render(){
        return(
        <div>
            <h1>Hover counter</h1>
            <h1> count :{ this.state.count}</h1>
            <button onMouseOver={()=> this.increment()}>Increment</button>
        </div> 
        )
    }

}

export default withCounter(HoverCounter)