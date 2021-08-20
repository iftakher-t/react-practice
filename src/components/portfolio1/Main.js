import React from 'react'


function Main (){
        return (
            <div className="grid"> 
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

export default Main 