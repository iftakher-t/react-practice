import React from 'react'
import Tag from './Tag'

class Main extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            tags:['Tag1', 'Tag2', 'Tag3', 'Tag4','Tag5']
        }
    }
    



    addTag=()=>{
        let el = document.getElementById("tagSellect");
       

        this.setState({
            
        })

    }

    render(){
        const {tags} = this.state

        return (
            <div className="main-container"> 
                <div className="tagContainer">
                    <Tag />
                </div>
                <div className="dropdownContainer">
                    <form>
                    <select className="form-control" id="tagSellect" >
                       {tags.length ? tags.map( tag => <option key={tag} value="volvo" >{ tag }</option>) : null}

                    </select>
                    <button onClick={this.addTag}>Add</button>
                    </form>
                </div>
            </div>
            )
    }

}

export default Main 