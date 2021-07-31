import React from 'react';
// 1st
// const Greet = ({name, age, children}) => {
//     return (
//         <div>
//             <h1>Hello {name} - age: {age}</h1>
//             {children}
//         </div>
//     )
// }

//2nd approach  // from code evulation

// export const Greet = (props) => {
// const {name, age , children} = props;
//     return (
//         <div>
//             <h1>Hello {name} --- age: {age}</h1>
//             {children}
//         </div>
//     )
// }

// 3rd approach 
const Greet = (props) => {
    return <h1>Hello {props.name} --- age: {props.age}...children: {props.children} </h1>
}

export default Greet;