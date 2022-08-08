import './canvas-options.css'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'
import { useContext } from 'react'

const CanvasOptions = ({menuSelect, setMenuSelect}) => {

  const {showPhotoMenuState, setShowPhotoMenuState} = useContext(ShowPhotoMenuContext)

  const menuToggle = (e) => {
    setMenuSelect(e.target.value)
    if (e.target.value === menuSelect) {setMenuSelect('canvas')}
  }

  const activateOverlay = () => {
    showPhotoMenuState ? setShowPhotoMenuState(false) : setShowPhotoMenuState(true)
  }


  return (
    <div className='option-wrapper'>
        <button className='button' value ='save' onClick={(e)=> {menuToggle(e)}}>Save Canvas</button>
        <button className='button'  value= 'new' onClick={(e)=> {menuToggle(e)}}>New Canvas</button>
        <div className='overlay-buttons-wrapper'>
        <button className='overlay-button' value= 'show' onClick={(e)=> {menuToggle(e)}}>Set Overlay</button>
        <button className='overlay-button' value= 'show' onClick={(e)=> {activateOverlay()}}>Activate Overlay</button>
        </div>

    </div>
  )
}

export default CanvasOptions