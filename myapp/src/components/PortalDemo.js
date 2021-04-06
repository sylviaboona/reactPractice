import React from 'react'
import ReactDOM from 'react-dom'

//portals help us to mount on any other DOM element other than the div with id root
//these come in handy when we ARE DEALING WITH CSS and we have a child component which is a popup or  modal
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
