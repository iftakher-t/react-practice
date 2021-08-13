import React from 'react'
import Tag from './Tag'
// import Random from './Random'

class Main extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            tags:['Tag1', 'Tag2', 'Tag3', 'Tag4','Tag5'],
            dispTags:[]
        }
    }
    removeTag =(deletedTag)=>{
        console.log('Index' ,deletedTag)
        let restTags = this.state.dispTags.filter( (el, i) => i !== deletedTag )
        // let restTags = this.state.dispTags.splice(deletedTag, 1 )
         this.setState({ 
             dispTags: restTags
         })
     }

    addTag =(e)=>{
        let el = document.getElementById("tagSellect").value;
        this.setState({ 
            dispTags: this.state.dispTags.concat(el)
        })
        e.preventDefault()
    }

    render(){
        const {tags, dispTags } = this.state
        return (
            <div className="main-container"> 
                <div className="tagContainer">
                    <Tag 
                        removeTag={this.removeTag}
                        value = {dispTags} />
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