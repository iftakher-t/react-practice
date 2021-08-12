import React from 'react'
import axios from 'axios'

class Post extends React.Component{
    constructor(props){
        super(props)

        this.state={
            post:[],
            errMsg:''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .than( response =>{
            console.log(response)
            this.setState({
                post:response.data
            })
        })
        .catch(e => {
            this.setState({
                errMsg:'error retriving data'
            })
        })
    }
render(){
    const {post} = this.state
    return (
        <div>
            {post.length ? post.map( post => <div key={post.id}> {post.title} </div>): null}
        </div>
    )
}
}

export default Post