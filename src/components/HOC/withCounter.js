import React ,{ Component } from 'react'

const withCounter = (OriginalComp) =>{
class NewComp extends Component{
    constructor(props){
        super(props)

        this.state = { count: 0 }
    }

Increment = () => {
this.setState( PrevState => {
  return {count: PrevState.count + 1 }

        })
    }

    render(){
        return <OriginalComp 
        count={ this.state.count } 
        Increment = {this.Increment}
        {...this.props}
        />
        }
    }

    return NewComp
}

export default withCounter