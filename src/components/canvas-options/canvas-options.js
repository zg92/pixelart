import './canvas-options.css'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'
import { useContext, useEffect} from 'react'
import { ScreenshotContext } from '../../context/screenshot.context'

const CanvasOptions = ({menuSelect, setMenuSelect}) => {

  const {photoMenuState, setPhotoMenuState} = useContext(ShowPhotoMenuContext)
  const {createScreenshot, setCreateScreenshot} = useContext(ScreenshotContext)

  const menuToggle = (e) => {
    setMenuSelect(e.target.value)
    if (e.target.value === menuSelect) {setMenuSelect('canvas')}
  }

  const activateOverlay = () => {
    photoMenuState ? setPhotoMenuState(false) : setPhotoMenuState(true)
  }

  const takeScreenshot = () => {
    createScreenshot ? setCreateScreenshot(false) : setCreateScreenshot(true)
  }

  return (
    <div className='option-wrapper'>
        <button className='button' value ='save' onClick={takeScreenshot}>Save Canvas</button>
        <button className='button'  value= 'new' onClick={(e)=> {menuToggle(e)}}>New Canvas</button>
        <div className='overlay-buttons-wrapper'>
        <button className='overlay-button' value= 'show' onClick={(e)=> {menuToggle(e)}}>Set Overlay</button>
        <button className='overlay-button' value= 'show' onClick={activateOverlay}>Activate Overlay</button>
        </div>

    </div>
  )
}

export default CanvasOptions