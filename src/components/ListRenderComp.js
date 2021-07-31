import React from 'react'

export default function ListRenderComp() {
    // const arr =['blue' ,'black', 'white','green']
    // const myColors = colors.map( (el, index ) => <h1> {index +1} :{ el } </h1> )
    // return (
    //     <div>
    //         {/* {
    //         colors.map( (el, index ) => <h1> {index +1} :{ el } </h1> )
    //         } */}

    //         { myColors}
    //     </div>
    // )


const users = [{
    id : 1,
    name: Ift,
    Age:37
},
{
    id : 2,
    name: Iftakher,
    Age:37
},
{
    id : 3,
    name: Rok,
    Age:37
},
]

return(
        <div>
            <h1> All users</h1>
            {
            users.map( (el) =>{ 
            <h1 id = {key}> {index +1} :{ el } </h1> })
            }

        </div>
)

}
