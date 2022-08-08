import { SketchPicker } from 'react-color'
import './color-picker.css'
import { useContext } from 'react'
import { ColorContext } from '../../context/color.context'
import './color-picker.css'


const ColorPicker = () => {

    const { color, setColor } = useContext(ColorContext)

    const colorChange = (e) => {
        setColor(e.hex)
    }

    return (
        <div className='color-picker-wrapper'>
            <SketchPicker color={color} disableAlpha={true} width={300} onChange={(e) => colorChange(e)} className='color' />
        </div>
    )
}

export default ColorPicker