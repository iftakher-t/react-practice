import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const inititalState = {
    loading: true,
    error:'',
    data: {}
}

const reducer = (state, action) => {
      switch (action.type) {
        case 'success' :
            return {
                loading: false,
                error:'',
                data: action.payload
            }
            case 'fail' :
            return {
                loading: false,
                error:'An error occurred',
                data: {}
            }
            default : return state
    }
}

function DataFetchComp2() {
    const [data, dispatch] = useReducer(reducer, inititalState);
  
    useEffect(() =>{
        axios.get()
        .then( res =>{
            dispatch({type:'success', payload: res.data});
        })
        .catch(err =>{
            dispatch({type:'fail', payload: {}})
        })
        
       })
    return (
        <div>
            {data.loading ? <h1>Loading...</h1> : <h1>Loading...</h1>}
        </div>
    )
}

export default DataFetchComp2
