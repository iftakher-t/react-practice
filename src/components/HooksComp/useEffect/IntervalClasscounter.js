import React from 'react'

export default class IntervalClasscounter extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval( this.tick, 1000)
    }
    componentWillMount(){
        clearInterval(this.interval)
    }

    tick=() => {
        this.setState( (prevState, props) => ({
        count : prevState.count + 1            
        }))
    }
    
    render() {
        return (
            <div>
            <h2>Count - { this.state.count }</h2>
            </div>
        )
    }
}
