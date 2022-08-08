import React from 'react'
import Grid from '../grid/grid'
import './canvas-wrapper.css'

const CanvasWrapper = () => {
    return (
        <div className='grid-ui-wrapper'>
        <div className='canvas-outer'>
           <Grid />
        </div>
        </div>
    )
}

export default CanvasWrapper