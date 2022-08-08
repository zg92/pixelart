import './new-photo-menu.css'
import { useState, useContext } from 'react'
import { NewPhotoDimensionContext } from '../../context/new-photo-dimension.context'

const NewPhotoMenu = ({setMenuSelect}) => {

    const [dimensionInput, setDimensionInput] = useState()
    const [inputWarning, setInputWarning] = useState()
    const { setDimension } = useContext(NewPhotoDimensionContext)

    const inputChecker = (input) => {
        const inputInt = parseInt(input)
        if (Number.isInteger(inputInt) === false) {
            setInputWarning('Input must be an integer!')
            return false
        }
        if (inputInt > 256) {
            setInputWarning('Input must be < 256!')
            return false
        }
        if (inputInt < 4) {
            setInputWarning('Input must be > 3!')
            return false
        }
        if (Math.sqrt(inputInt) % 1 !== 0) {
            setInputWarning('Input must be square number!')
            return false
        }
        return true
    }

    const submitDimensions = () => {
        if (inputChecker(dimensionInput.dimensionInput) === true) {
            setDimension(dimensionInput.dimensionInput)
            setMenuSelect('canvas')
            
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setDimensionInput({ [name]: value })
    }

    return (
        <div className='new-photo-menu-wrapper'>
            <div className='new-photo-input-label'>Enter pixel dimensions (max 256, must be even, and square-able) </div>
            <input className='new-photo-input-dimensions' name='dimensionInput' onChange={handleChange} />
            <div className='new-photo-input-label'>{inputWarning}</div>
            <button className='button-menu' onClick={submitDimensions}>Create New Canvas</button>
        </div>
    )
}

export default NewPhotoMenu