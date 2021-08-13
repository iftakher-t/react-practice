import React from 'react'
import Tag from './Tag'
import Random from './Random'

class Main extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            tags:['Tag1', 'Tag2', 'Tag3', 'Tag4','Tag5'],
            dispTags:['Tag1']
        }
    }
    


    addTag=(e)=>{
        let el = document.getElementById("tagSellect").value;
       console.log(el)
       
        this.setState({ 
            dispTags: this.state.dispTags.concat(el)
        })

    e.preventDefault()
    }

    removeTag=(e)=>{
       
        this.setState({ 
            dispTags: this.state.dispTags.concat(el)
        })

    e.preventDefault()
    }

    render(){
        const {tags, dispTags } = this.state
        console.log('dispTags', dispTags)
        return (
            <div className="main-container"> 
            {/* <Random /> */}
                <div className="tagContainer">
                    <Tag value = {dispTags} />
                </div>
                <div className="dropdownContainer">
                    <form>
                    <select className="form-control" id="tagSellect"  >
                       {tags.length ? tags.map( tag => <option key={tag} value= {tag} >{ tag }</option>) : null}

                    </select>
                    <button onClick={this.addTag}>Add</button>
                    </form>
                </div>
            </div>
            )
    }

}

export default Main 