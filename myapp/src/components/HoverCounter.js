import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //        count: 0  
    //     }
    // }
    
    // incrementCount =()=> {
    //     this.setState(prevState =>{
    //         return {count: prevState.count + 1}
    //     })
    // }
    // HOC takes care of maintaining the state and incrementing it
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver = {incrementCount}> Hovered {count} times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
