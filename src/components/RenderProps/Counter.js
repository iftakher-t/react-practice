import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count: 0
        }
    }

    Increment = () =>{
        this.setState( PrevState =>{
            return {count: PrevState.count + 1}
    })
}

    render(){
        return (
        <div>
            {this.props.children(this.state.count, this.Increment)}
        </div> 
        )

    }

}

export default Counter