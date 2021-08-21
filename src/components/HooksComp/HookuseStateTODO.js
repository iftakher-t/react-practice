import React, { useState } from 'react'
import { FaPlus, FaTrashAlt } from "react-icons/fa";


function HookuseStateTODO (){
    const [ inputData , setInputData ] = useState('')
    const [ todos , setTodos ] = useState([])

    const addTodo = () =>{
        if(!inputData){
            console.log('write something')
        }else{
            setTodos( [...todos, inputData]) 
            setInputData('')
        }

    }
const removeTodo= (ind)=>{
    let res= todos.filter( (el,i) => i !== ind )
    setTodos(res)
}

const editTodo= (ind)=>{
    let res= todos.filter( (el,i) => i !== ind )
    setTodos(res)

}

    return( <div>
                <div> 
                    <input type="text" value = {inputData} onChange={(e)=> setInputData(e.target.value)}/>
                
                <button onClick = { addTodo } ><FaPlus title='Add todo' color ='blue' /> add </button></div>

                <ul>
                {
                  todos.length?  
                  todos.map( (el,ind )=> <li key={ ind }>{ todos }<button onClick = {()=> removeTodo(ind)}><FaTrashAlt title='delete todo' color ='red' /> x</button></li>): null
                 }
                </ul>
           </div>
    )
}

export default HookuseStateTODO