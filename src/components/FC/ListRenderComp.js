import React from 'react'
import User from './User'

export default function ListRenderComp() {
    // const arr =['blue' ,'black', 'white','green']
    //2nd  const myColors = colors.map( (el, index ) => <h1> {index +1} :{ el } </h1> )
    // return (
    //     <div>
    //         {/* {
    //         colors.map( (el, index ) => <h1> {index +1} :{ el } </h1> )
    //         } */}

    //         // 2nd { myColors}
    //     </div>
    // )


const users = [{
    id : 1,
    name: 'A Aziz',
    Age:37
},
{
    id : 2,
    name: 'Iftakher',
    Age:37
},
{
    id : 3,
    name: 'Rok',
    Age:37
},
]

// 1st approach 
// return(
//         <div>
//             { // must be in the {} bracket
//             users.map( user => <h2 > { user.name } </h2> ) 
//             }
//         </div>
// )

// 2nd approach
// const nameList = users.map( user => <h2 > I am { user.name }. I am in {user.age} </h2> )  
// return <div> { nameList } </div>


// 3dd approach with the hepl of User component // clean code attempt 
const nameList = users.map( user => < User  key= {user.id} user = {user} />)  
return <div> { nameList } </div>

            
// <h1 id = {key}> {index +1} : { user } </h1> })

}
