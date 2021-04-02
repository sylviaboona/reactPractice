import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        //short circuit operators, renders nothing if state is false
        return this.state.isLoggedIn && <div> Welcome Sylvia</div>


        // return this.state.isLoggedIn?(
            
        //     <div> Welcome Sylvia</div>):(
        //     <div> Welcome Guest</div>
        // )
        // let message
        //    if(this.state.isLoggedIn){
        //     message = <div> Welcome Sylvia</div>
        // } else{
        //     message = <div> Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return(
        //         <div> Welcome Sylvia</div>
        //     )
        // } else{
        //     return(
        //         <div> Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //        <div> Welcome Sylvia</div>
        //        <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
