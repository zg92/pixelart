import React from 'react'
import GridCanvas from '../grid-canvas/grid-canvas'
import './canvas-wrapper.css'

const CanvasWrapper = () => {
    return (
        <div className='grid-ui-wrapper'>
        <div className='canvas-outer'>
           <GridCanvas />
        </div>
        </div>
    )
}

export default CanvasWrapper