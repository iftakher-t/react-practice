import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
      
    render() {
// 1. if -else rendering 
            // if(this.state.isLoggedIn){
            //     return <div> Welcome Iftakher </div>
            // }else{
            //     return <div> Welcome Guest </div>
            // }
// 2. element var rendering

//         let message 
//             if(this.state.isLoggedIn){
//                 message =  <div> Welcome Iftakher </div>
//                 // message = 'Welcome Iftakher' // this also work
//             }else{
//                 message =  <div> Welcome Guest </div>
//             }
// return <div> { message } </div>

 // 3. using turnary

//  return( 
//      this.state.isLoggedIn? <div> Welcome Iftakher </div> : <div> Welcome Guest </div>
     
//      )


// 4. shortcircit
return this.state.isLoggedIn && <div> Welcome Iftakher </div>

        }
    }

export default UserGreeting
