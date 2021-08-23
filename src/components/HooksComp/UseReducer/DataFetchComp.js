import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchComp() {
const [loading, setLoading] =useState(true) 
const [error, setError] =useState('') 
const [data, setData] = useState({}) 

useEffect(async() =>{
    try{
        const res = await axios.get('')
            setLoading(false)
            setError('')
            setData( res.data)
    }
    catch(err){
        setLoading(false)
        setError('An error occurred')
        setData({})
    }
},[])

// .then( res =>{
//     setLoading(false)
//     setError('')
//     setData( res.data)
// })
// .catch( res =>{})
// })
    return (
        <div>
           {loading ? <h1> Loading....</h1> : <h1> {data.title} </h1> } 
        </div>
    )
}

export default DataFetchComp
