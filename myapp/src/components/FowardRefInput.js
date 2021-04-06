import React from 'react'

// function FowardRefInput() {
//     return (
//         <div>
//             <input type = "text"/>
//         </div>
//     )
// }
const FowardRefInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type = "text"  ref ={ref}/>
        </div>
    )
})

export default FowardRefInput
