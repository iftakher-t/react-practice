import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";


function HookuseStateTODO (){
    const [ inputData , setInputData ] = useState('')
    const [ todos , setTodos ] = useState([])
    const [ edit , setEdit ] = useState({
        id:null,
        value:''
    })

    const addTodo = () =>{
        if(!inputData){
            console.log('write something')
        }else{
            setTodos( [...todos, inputData]);
            setInputData('')
        }
        console.log({inputData,todos})
    }
    const removeTodo= (ind)=>{
        let res= todos.filter( (el,i) => i !== ind )
        setTodos(res)
    }
    const completedTodo = (ind)=>{
        let res= todos.filter( (el,i) => i !== ind )
        setTodos(res)
    }

    const editTodo = (id, newValue) =>{
        if(!newValue.text || /^\s*$/.text(newValue.text)){
            return;
        }
        setTodos(prev => prev.map( (el,ind) => (el.ind === id) ? newValue :el))
    }

    return( <div>
                <h1> TODO APP</h1>
                <div> 
                    <input type="text" 
                        value = {inputData}
                        onChange={(e)=> setInputData(e.target.value)}/>
                
                    <button onClick = { addTodo } > add </button>
                </div>

                <ul>
                {
                  todos.length?  
                  todos.map( (el,ind )=> (
                  <li key={ ind }> { el } 
                  <button onClick = {()=> editTodo(ind)}>  Edit </button>
                  <button onClick = {()=> removeTodo(ind)}>
                      <FaTrashAlt title='delete todo' color ='tomato' /></button>
                      </li>)): null
                 }
                </ul>
           </div>
    )
}

export default HookuseStateTODO