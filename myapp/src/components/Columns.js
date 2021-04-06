import React from 'react'

function Columns() {
    const items = []
    return (
        // React fragments lets you group elements
        // without adding extra nodes to the dom
        //It can be epresented by empty opening and closing tags
        // however with this you cant add a key attribute
        <>
            {/* {
               items.map( item => (
                <React.Fragment key = {item.id}>  
                   <h1>Title</h1>
                   <p>{item.title}</p>
                </React.Fragment>
               )) 
            } */}
            <td>Name</td>
            <td>Sylvia</td>
        </>
    )
}

export default Columns
