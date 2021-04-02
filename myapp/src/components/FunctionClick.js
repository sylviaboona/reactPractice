import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>ClickMe</button>
        </div>
    )
}

export default FunctionClick
