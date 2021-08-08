import React, { Component } from 'react'
// import React, { PureComponent } from 'react'
// import PureComp from './PureComp';
// import RegComp from './RegComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
// class ParentComp extends PureComponent { // to avord re rander for setInterval
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Iftakher'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Iftakher'
            })
        }, 3000 ) 
    }

    render() {
        console.log('parent')
        return (
            <div>
                <h2> Parent component</h2>
                {/* <PureComp name = { this.state.name}/> */}
                {/* <RegComp  name = { this.state.name}/> */}
                <MemoComp  name = { this.state.name}/>
            </div>
        )
    }
}

export default ParentComp;
