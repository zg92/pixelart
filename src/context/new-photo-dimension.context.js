import { createContext, useState } from "react";

export const NewPhotoDimensionContext = createContext({
    dimension: null,
    setDimension: null,
})

export const NewPhotoDimensionContextProvider = ({children}) => {
    const [dimension, setDimension] = useState(36)
    const dimensionTemplate = Math.sqrt(parseInt(dimension))
    const value = {dimension, setDimension, dimensionTemplate}


    return <NewPhotoDimensionContext.Provider value = {value}>{children}</NewPhotoDimensionContext.Provider>
}