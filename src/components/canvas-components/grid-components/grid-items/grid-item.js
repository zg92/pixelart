import { useContext } from "react";
import { GridDimensionContext } from "../../../../context/grid-dimension.context";
import useGridDimensions from "../../../../customHooks/getGridWidth";
import "./grid-item.css";

const GridItem = ({
  gridItemName,
  functionality,
  hideGrid,
  gridAppearence,
  i,
}) => {
  const { dimensionTemplate } = useContext(GridDimensionContext);

  return (
    <div
      key={i}
      className={`gridItem ${gridItemName}`}
      onMouseDown={(e) => functionality(e)}
      style={{
        ...gridAppearence[hideGrid],
        maxHeight: useGridDimensions() / dimensionTemplate + "px",
        maxWidth: useGridDimensions() / dimensionTemplate + "px",
      }}
    ></div>
  );
};

export default GridItem;
