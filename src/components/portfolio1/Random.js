import React, { Component } from 'react'
  
class Random extends Component {
    constructor() {
        super() 
        this.state = {
            tags :["tag1", "tag2", "tag3", "tag4"],
            display :[],
            selectedData : ""
        }
    }
    
    addMoreHandler = (e) => {
        e.preventDefault() 
        this.setState({
            display: [...this.state.display, this.state.selectedData]
        })
    }
 
    selectHandler = (e) => {
        e.preventDefault() 
        this.setState({
            selectedData: e.target.value
        })
    }
    render() {
        
        return (
            <div>
                <label htmlFor="cars">Choose a car:</label>
                <select id="cars" onChange = {(e) => this.selectHandler(e)} >
                    {
                        this.state.tags.map((data, ind) => {
                            return(
                                <option key = {ind} value= {data}>{data}</option>
                            )
                        })
                    }
                </select>
                
                <button onClick={(e) => this.addMoreHandler(e)}>Add more</button>
                
                <div>
                    <h1>Display part</h1>
                    {
                        this.state.display.map((data, ind) => {
                           if(this.state.display.length > 0) {
                             return(
                                <button key = {ind} >{data}</button>
                            )
                           }else {
                            return (
                                <p>No option have selected</p>
                            )
                           }
                        })
                    }
                </div>
                    
            </div>
        )
    }
}
 
export default Random