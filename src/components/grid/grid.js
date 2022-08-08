import './grid.css'
import { useContext, useEffect, useRef } from 'react'
import { ColorContext } from '../../context/color.context'
import { NewPhotoDimensionContext } from '../../context/new-photo-dimension.context'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'
import mario from '../../assets/mario.png'

const Grid = () => {

    const { color, useColor } = useContext(ColorContext)
    const { dimension, setDimension } = useContext(NewPhotoDimensionContext)
    const {showPhotoMenuState, setShowPhotoMenuState} = useContext(ShowPhotoMenuContext)

    const generateGrid = (dimension) => {
        const x = parseInt(dimension)
        const sqrtDimension = Math.sqrt(x)
        const gridArray = []
        for (let i = 1; i < (x + 1); i++) {
            const gridItemName = `grid${i}`
            gridArray.push(gridItemName)
        }
        return gridArray
    }

    const addPixelColor = (e) => {
        const pixelSelected = document.getElementsByClassName(e.classList[1])
        if (pixelSelected[0].style['background-color'] !== 'white') {
            pixelSelected[0].style['background-color'] = 'white'
        }
        else {
            pixelSelected[0].style.background = color
        }
    }

    const dimensionTemplate = Math.sqrt(parseInt(dimension))

        return (
            <div className='grid-wrapper' style={{gridTemplateColumns: `repeat(${dimensionTemplate}, ${100 / dimensionTemplate}%)`, gridTemplateRows: `repeat(${dimensionTemplate}, ${100 / dimensionTemplate}%)`}} >
                {showPhotoMenuState ? <img src={mario} className='img-overlay'/> : null}
                {generateGrid(dimension).map((gridItemName) => <div key={gridItemName} className={`gridItem ${gridItemName}`} onClick={(e) => { addPixelColor(e.target) }} style={{ backgroundColor: 'white',  height:`${600/dimensionTemplate}px`, width:`${600/dimensionTemplate}px` }}></div>)}
            </div>
        )

}



export default Grid