const generateGrid = (dimension) => {
    const x = parseInt(dimension)
    const gridArray = []
    for (let i = 1; i < (x + 1); i++) {
        const gridItemName = `grid${i}`
        gridArray.push(gridItemName)
    }
    return gridArray
}

export default generateGrid