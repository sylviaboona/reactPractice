import React, { Component } from 'react'

//render prop - a technique for sharing code between react components
//using a prop whose value is a function

//it is possible to use a prop whose value is a function 
//to control what is rendered by a compponent
class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
