import React from 'react'
import './left-menu.css'

const LeftMenu = ({ children }) => {
    return (
        <div className='left-menu-wrapper'>{children}</div>
    )
}

export default LeftMenu