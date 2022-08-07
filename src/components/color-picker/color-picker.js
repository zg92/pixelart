import { useState } from 'react'
import { SketchPicker } from 'react-color'
import './color-picker.css'
import { useContext } from 'react'
import { ColorContext } from '../../context/color.context'


const ColorPicker = () => {

    const {color, setColor} = useContext(ColorContext)

    const colorChange = (e) => {
        setColor(e.hex)
    }

    return (
        <SketchPicker color={color} onChange={(e) => colorChange(e)} className='color'/>

    )
}

export default ColorPicker