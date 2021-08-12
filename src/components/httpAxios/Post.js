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
        .then( response =>{
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
            <h2> All post</h2>
            {
            post.length ? post.map( post => <div key={post.id}> <b> Title: </b> {post.title} </div>): null}
        </div>

    )
}
}

export default Post