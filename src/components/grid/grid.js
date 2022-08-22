import './grid.css'
import { useContext, useEffect, useRef } from 'react'
import { NewPhotoDimensionContext } from '../../context/new-photo-dimension.context'
import generateGrid from '../utilities/grid-utilities'
import { ScreenshotContext } from '../../context/screenshot.context'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs'
import { ShowPhotoMenuContext } from '../../context/show-photo-menu.context'


const Grid = ({ functionality, image, mode, displayToggle }) => {

    const { dimension, dimensionTemplate } = useContext(NewPhotoDimensionContext)
    const { createScreenshot, setCreateScreenshot } = useContext(ScreenshotContext)
    const { photoMenuState, setPhotoMenuState } = useContext(ShowPhotoMenuContext)

    const modeReference = {
        draw: { zIndex: '2', opacity: '75%' },
        upload: { zIndex: '-1', opacity: '100%' },
    }

    const gridHide = {
        true: { border: '0px solid white' },
        false: { border: '1px solid black' }
    }

    const gridRef = useRef(document.querySelector('.grid-wrapper'))

    const takeScreenshot = async () => {
        const canvas = await html2canvas(document.querySelector('.grid-wrapper'), { allowTaint: true })        
        downloadImage(canvas)
    }

    const downloadImage = async (canvas) => {
        const imageData = canvas.toDataURL("image/png", 1.0)
        downloadjs(imageData, 'download.png', 'image/png')
    }

    const updateGridChildren = (children, update) => {
        for (let node of children) {
            node.style.border = update['border']
        }
    }

    useEffect(() => {
        if (createScreenshot === true) {
            const gridItems = gridRef.current.children
            updateGridChildren(gridItems, gridHide[true])
            takeScreenshot()
            
            updateGridChildren(gridItems, gridHide[false])
            setCreateScreenshot(false)

        }
    }, [createScreenshot])


    return (
        <div className='grid-image-wrapper' >
            {image}
            <div className='grid-wrapper' ref={gridRef} style={{ gridTemplateColumns: `repeat(${dimensionTemplate}, ${100 / dimensionTemplate}%)`, gridTemplateRows: `repeat(${dimensionTemplate}, ${100 / dimensionTemplate}%)` }} >
                {generateGrid(dimension).map((gridItemName) => <div key={gridItemName} className={`gridItem ${gridItemName}`} onClick={(e) => { functionality(e) }} style={{ ...modeReference[mode], ...gridHide[displayToggle], backgroundColor: 'white', height: `${600 / dimensionTemplate}px`, width: `${600 / dimensionTemplate}px` }}></div>)}
            </div>
        </div>


    )

}

export default Grid