import './grid-canvas.css'
import { useContext} from 'react'
import { ColorContext } from '../../context/color.context'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'
import Grid from '../grid/grid'

const GridCanvas = () => {

    const { color, useColor } = useContext(ColorContext)
    const { currentPhoto, uploadedPhotoPosition, photoMenuState, uploadedPhotoSize } = useContext(ShowPhotoMenuContext)
    const { topPosition, leftPosition } = uploadedPhotoPosition

    const addPixelColor = (e) => {
        const pixelSelected = document.getElementsByClassName(e.target.classList[1])
        if (pixelSelected[0].style['background-color'] !== 'white') {
            pixelSelected[0].style['background-color'] = 'white'  
        }
        else {
            pixelSelected[0].style.background = color
        }
    }
 
    return (
       <Grid image={photoMenuState ? <div className='img-wrapper'><img src={currentPhoto} style={{ top: topPosition, left: leftPosition, height: 600+(uploadedPhotoSize*50)+'px', width: 600+(uploadedPhotoSize*50)+'px' }} className='img-overlay' /></div>: null} 
       functionality={addPixelColor}
       mode = {'draw'}
       displayToggle = {false} />
    )

}

export default GridCanvas