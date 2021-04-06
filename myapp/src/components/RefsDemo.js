import React, { Component } from 'react'

//Refs make it possible to acces DOM nodes directly

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        
        // second method for crerating refs
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        //in reference to the second method
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type = "text" ref = {this.inputRef}/>
                <input type = "text" ref = {this.setCbRef}/>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
