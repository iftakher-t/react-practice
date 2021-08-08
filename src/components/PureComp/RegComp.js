import React from 'react';

class RegComp extends React.Component {

    render() {
        console.log('reg')
        return <h1>From regular comp: {this.props.name} </h1>
    }
}

export default RegComp;