import './grid.css'
import { useContext} from 'react'
import { NewPhotoDimensionContext } from '../../context/new-photo-dimension.context'
import generateGrid from '../utilities/grid-utilities'

const Grid = ({functionality, image, mode, displayToggle }) => {

    const { dimension, dimensionTemplate } = useContext(NewPhotoDimensionContext)

    const modeReference = {
    draw: {zIndex:'2', opacity:'75%'}, 
    upload: {zIndex:'-1', opacity:'100%'},
    }

    const gridHide = {
        true: {border:'1px solid white'},
        false: {border:'1px solid black'}
    }

    return (
       <div className='grid-image-wrapper'>
         {image}
        <div className='grid-wrapper' style={{gridTemplateColumns: `repeat(${dimensionTemplate}, ${100 / dimensionTemplate}%)`, gridTemplateRows: `repeat(${dimensionTemplate}, ${100 / dimensionTemplate}%)` }} >
        {generateGrid(dimension).map((gridItemName) => <div key={gridItemName} className={`gridItem ${gridItemName}`} onClick={(e) => {functionality(e)}} style={{...modeReference[mode], ...gridHide[displayToggle],  backgroundColor: 'white', height: `${600 / dimensionTemplate}px`, width: `${600 / dimensionTemplate}px` }}></div>)}
        </div>
        </div>
        
        
    )

}

export default Grid