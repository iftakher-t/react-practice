import React, { Component } from 'react'

class FormHandle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             detail : '',
             topic:''
        }
    }
    
    usernameChangeHandler = event =>{
        this.setState({
            username: event.target.value
        })
    }
    
    detailsChangeHandler = event =>{
        this.setState({
            details: event.target.value
        })
    }  

    optionChangeHandler = event =>{
        this.setState({
            topic: event.target.value
        })
    } 


    submitHandler = event =>{
        alert(` ${this.state.username} ${this.state.details} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit ={this.submitHandler}>
                <div>
                    <label > Username </label>
                    <input type="text" 
                    value = {this.state.username}
                    onChange={this.usernameChangeHandler} />
                </div>
                <div>
                    <label > Details </label>
                    <textarea type="text" 
                    value = {this.state.details}
                    onChange={this.detailsChangeHandler}/>
                </div>
                <div>
                    <label > Topic </label>
                    <select 
                    value = {this.state.topic}
                    onChange={this.optionChangeHandler}>
                        <option>React</option>
                        <option>Node</option>
                        <option>Angular</option>
                    </select>
                </div>
                <button type ="submit"> Submit</button>
            </form>
        )
    }
}

export default FormHandle