import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    //Woeks the same as ComponentE.contextType
    static contextType = UserContext
    render() {
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF />
            </div>
        ) 
    }
}

// ComponentE.contextType = UserContext

export default ComponentE
