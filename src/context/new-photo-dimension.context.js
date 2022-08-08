import { createContext, useState } from "react";

export const NewPhotoDimensionContext = createContext({
    dimension: null,
    setDimension: null
})

export const NewPhotoDimensionContextProvider = ({children}) => {
    const [dimension, setDimension] = useState(36)
    const value = {dimension, setDimension}

    return <NewPhotoDimensionContext.Provider value = {value}>{children}</NewPhotoDimensionContext.Provider>
}