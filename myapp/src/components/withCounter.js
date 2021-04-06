import React from 'react'

// We can add parameters to HOC e.g. incrementNumber
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
               count: 0  
            }
        }
        
        incrementCount =()=> {
            this.setState(prevState =>{
                return {count: prevState.count + incrementNumber}
            })
        }

        render(){
            // ...gis.props passes down the rest of the props to the HOC
            return <WrappedComponent count ={this.state.count} incrementCount ={this.incrementCount} {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter