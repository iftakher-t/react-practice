import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching (){
    // const [ posts , setPosts] = useState([])
    const [ post , setPost] = useState({})
    const [ id , setId] = useState(1)

    useEffect( ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response)
            // setPosts(response.data)
            setPost(response.data)
        })
        .catch((error)=>{
            console.error(error);
        })
    },[id])
        return (
            <div>

               <input type ='text' value = {id} onChange={ e => setId(e.target.value)}/>
               <h2> {post.title}</h2>
                {/* <ul>{
                    posts.map( post => <li key={post.id}>{ post.title} </li>)
                    }
                </ul> */}
            </div>
        )
    }

export default DataFetching