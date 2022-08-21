import { createContext, useEffect, useState } from "react";
import mario from '../assets/mario.png'

export const ShowPhotoMenuContext = createContext({
    photoMenuState:null, 
    setPhotoMenuState:null,
    currentPhoto: null,
    setCurrentPhoto:null,
    uploadedPhotoPosition:null,
    setUploadedPhotoPosition: null,
    uploadedPhotoSize: null,
    setUploadedPhotoSize: null,
})

export const ShowPhotoMenuContextProvider = ({children}) => {
    const [photoMenuState, setPhotoMenuState] = useState(true)
    const [currentPhoto, setCurrentPhoto] = useState(mario)
    const [uploadedPhotoPosition, setUploadedPhotoPosition] = useState({leftPosition:null, topPosition:null})
    const [uploadedPhotoSize, setUploadedPhotoSize] = useState('0')
    const value = {photoMenuState, setPhotoMenuState, uploadedPhotoSize, setUploadedPhotoSize, currentPhoto, setCurrentPhoto, uploadedPhotoPosition, setUploadedPhotoPosition}

    return <ShowPhotoMenuContext.Provider value = {value}>{children}</ShowPhotoMenuContext.Provider>
}