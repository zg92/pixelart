import './show-photo-menu.css'
import { useState, useContext } from 'react'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'

const ShowPhotoMenu = ({setMenuSelect}) => {

    const {showPhotoMenuState, setShowPhotoMenuState} = useContext(ShowPhotoMenuContext)

    const setPhoto = () => {
        setShowPhotoMenuState(true)
        setMenuSelect('canvas')
    }

    return (
        <div className='new-photo-menu-wrapper'>
            <button className='overlay-button' onClick={()=> {setPhoto()}}/>
        </div>
    )
}

export default ShowPhotoMenu