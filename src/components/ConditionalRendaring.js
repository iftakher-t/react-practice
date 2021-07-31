import React, { Component } from 'react'

class ConditionalRendaring extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true,
             message : 'a'
        }
    }
    
    render(){
        const {isLoggedIn} = this.state

        //4th approch

        return message && <h1> I am logged in { message } </h1>

        // 3rd approces

        // return isLoggedIn ? <h1> I am logged in  {message}  </h1> : <h1> I am not logged out</h1>
        // return !!message ? <h1> I am logged in</h1> : <h1> I am not logged out</h1>

        // 2 approces
        // let element

        // if(isLoggedIn){
        //     element =<h1> I am logged in</h1>
        // }else{
        //     element =<h1> I am logged out</h1>
        // }

        // return  <div> {element}</div>

        // 1 approces
        // if(isLoggedIn){
        // return (
        //     <div>
        //         <h1> I am logged in</h1>
        //     </div>
        // )
        // } else {
        //     return (
        //         <div>
        //             <h1> I am logged out</h1>
        //         </div>
        //     ) 
        // }
    }
}
export default ConditionalRendaring

// if else 

// elenent variables

// ternary variables

//short circit