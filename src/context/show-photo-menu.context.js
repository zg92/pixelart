import { createContext, useState } from "react";

export const ShowPhotoMenuContext = createContext({
    showPhotoMenuState:null, 
    setShowPhotoMenuState:null
})

export const ShowPhotoMenuContextProvider = ({children}) => {
    const [showPhotoMenuState, setShowPhotoMenuState] = useState(false)
    const value = {showPhotoMenuState, setShowPhotoMenuState}

    return <ShowPhotoMenuContext.Provider value = {value}>{children}</ShowPhotoMenuContext.Provider>
}