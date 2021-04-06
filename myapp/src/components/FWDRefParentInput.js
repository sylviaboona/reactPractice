import React, { Component } from 'react'
import FowardRefInput from './FowardRefInput'

class FWDRefParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FowardRefInput ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FWDRefParentInput
