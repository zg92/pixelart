import './upload-photo-menu.css'
import { useState, useContext, useRef, useEffect } from 'react'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'
import Grid from '../grid/grid'

const UploadPhotoMenu = ({ setMenuSelect }) => {

    const imageRef = useRef(document.querySelector('.show-photo-img'))
    const { setCurrentPhoto, currentPhoto, setUploadedPhotoPosition, uploadedPhotoPosition, setPhotoMenuState, setUploadedPhotoSize, uploadedPhotoSize } = useContext(ShowPhotoMenuContext)
    const [samplePhotoUpload, setSamplePhotoUpload] = useState()
    const [showGridOverlay, setShowGridOverlay] = useState(true)

    const setSamplePhoto = (e) => {
        setSamplePhotoUpload(URL.createObjectURL(e.target.files[0]));
    }

    const submitPhoto = () => {
        if (samplePhotoUpload !== undefined) { 
         setCurrentPhoto(samplePhotoUpload)
        }
        setMenuSelect('canvas')
        setPhotoMenuState(true)
     }

   const showGrid = () => {
    showGridOverlay ? setShowGridOverlay(false) : setShowGridOverlay(true)
    if (showGridOverlay === true) {
        imageRef.current.style.opacity = '40%'
    } 
    else {
        imageRef.current.style.opacity = '100%'
    }}

    const adjustImageSize = (e) => {
        setUploadedPhotoSize(e.target.value)
        console.log(e.target.value)
        imageRef.current.style.height = 600+(uploadedPhotoSize*50)+'px'
        imageRef.current.style.width = 600+(uploadedPhotoSize*50)+'px'
    }
        

    useEffect(() => {
        imageRef.current.addEventListener('mousedown', () => {
            imageRef.current.addEventListener("mousemove", drag)
        })
        imageRef.current.addEventListener('mouseup', () => {
            imageRef.current.removeEventListener("mousemove", drag)
        })
    },[])


    const drag = ({ movementX, movementY }) => {
        const getStyle = window.getComputedStyle(imageRef.current)
        let currentLeft = parseInt(getStyle.left) + movementX + 'px' 
        let currentTop = parseInt(getStyle.top) + movementY + 'px'
        imageRef.current.style.left = currentLeft 
        imageRef.current.style.top = currentTop 
        if (parseInt(currentLeft) >= 500) {
            imageRef.current.style.left = '400px'
        }
        if (parseInt(currentLeft) <= -500) {
            imageRef.current.style.left = '-400px'
        }
        if (parseInt(currentTop) >= 500) {
            imageRef.current.style.top = '400px'
        }
        if (parseInt(currentTop) <= -500) {
            imageRef.current.style.top = '-400px'
        }
        setUploadedPhotoPosition({leftPosition:currentLeft, topPosition:currentTop})
    }

    const {topPosition, leftPosition} = uploadedPhotoPosition

    return (
        <div className='show-photo-menu-wrapper'>
            <Grid image = {
                <div className='img-wrapper' >
                   <img src={ samplePhotoUpload === undefined ? currentPhoto : samplePhotoUpload} className='show-photo-img' ref={imageRef} draggable='false' 
                   style={{ top: topPosition, left: leftPosition, height: 600+(uploadedPhotoSize*50)+'px', width: 600+(uploadedPhotoSize*50)+'px' }} />
                </div>
            } mode = {'upload'} displayToggle={showGridOverlay} />
            <div className='show-photo-button-wrapper'>
                <input className='show-photo-browse-button' type='file' onChange={setSamplePhoto} />
                <button className='show-photo-grid-button' onClick={showGrid}>Show Grid</button>
                <div className='show-photo-size-wrapper'>
                <span> Adjust Size</span>
                <input type='range' min='-3' max='3' value={uploadedPhotoSize} className='show-photo-size-slider' onChange={adjustImageSize}/>
                </div>
                <button className='show-photo-submit-button' onClick={submitPhoto}>Submit Photo</button>
            </div>
        </div>
    )
}

export default UploadPhotoMenu