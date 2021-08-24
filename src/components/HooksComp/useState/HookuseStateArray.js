import React, { useState } from 'react'

function HookuseStateArray (){
    const [ items , setItems ] = useState([])

    const addNumbe = () =>{
        setItems([...items, 
            {
            id: items.length,
            value : Math.floor(Math.random()*10)
        }])
        console.log(items)
    }
const removeNumber= (ind)=>{
    let res= items.filter( (el,i) => i !== ind )
    setItems(res)
    console.log({res})

}
    return( <div>
        
                 <button onClick = {addNumbe}>addNumbe</button>
                <ul>
                {
                //   items.length?  items.map( item => <li key={item.id}>{item.value}</li>): null
                  items.length?  items.map( (item,ind )=> <li key={ind}>{item.value}<button onClick = {()=> removeNumber(ind)}>x</button></li>): null
                 }
                </ul>
           </div>
    )
}

export default HookuseStateArray