import React, { PureComponent } from 'react'

//Pure component does a shallow comparison of stete and props
//only re-renders if there is a difference
//this stops unnecessary re-renders which boosts performance in some scenarios
// when you create a pure component make sure all child component are alse pure to avoid unexpected behaviour

class PureComp extends PureComponent {
    render() {
        console.log('PureComp Comp render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
