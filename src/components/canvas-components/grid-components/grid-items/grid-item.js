import { useContext } from "react";
import { GridDimensionContext } from "../../../../context/grid-dimension.context";
import useWindowDimensions from "../../../../customHooks/getWindowWidth";
import "./grid-item.css";

const GridItem = ({
  gridItemName,
  functionality,
  hideGrid,
  gridAppearence,
}) => {
  const { dimensionTemplate } = useContext(GridDimensionContext);

  const gridWidth = useWindowDimensions() * 0.7 * 0.8;

  return (
    <div
      key={gridItemName}
      className={`gridItem ${gridItemName}`}
      onClick={(e) => {
        functionality(e);
      }}
      style={{
        ...gridAppearence[hideGrid],
        // height: gridWidth / dimensionTemplate + "px",
        // width: gridWidth / dimensionTemplate + "px",
        maxHeight: gridWidth / dimensionTemplate + "px",
        maxWidth: gridWidth / dimensionTemplate + "px",
      }}
    ></div>
  );
};

export default GridItem;
