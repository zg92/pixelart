import './grid.css'
import { useContext } from 'react'
import { ColorContext } from '../../context/color.context'


const Grid = () => {

    const {color, useColor} = useContext(ColorContext)

    const generateGrid = (x) => {
        const gridArray = []
        for (let i = 1; i < x + 1; i++) {
            let gridItemName = `grid${i}`
            gridArray.push(gridItemName)
        }
        return gridArray
    }

    const addPixelColor = (e) => {
        const pixelSelected = document.getElementsByClassName(e.classList[1])
        console.log(pixelSelected[0].style['background-color'])
        if (pixelSelected[0].style['background-color'] !== 'white') {
            console.log(pixelSelected[0].style['background-color'])
            pixelSelected[0].style['background-color'] = 'white'
        }
        else {
            pixelSelected[0].style.background = color
        }
    }

    return (
        <div className='grid-wrapper'>
            {generateGrid(36).map((gridItemName) => <div key={gridItemName} className={`gridItem ${gridItemName}`} onClick = {(e)=> {addPixelColor(e.target)}}  style={{backgroundColor:'white'}}></div>)}
        </div>
    )
}

export default Grid