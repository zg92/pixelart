import { useContext } from "react";
import { NewPhotoDimensionContext } from "../../../../context/new-photo-dimension.context";
import useWindowDimensions from "../../../../customHooks/getWindowWidth";
import "./grid-item.css";

const GridItem = ({
  gridItemName,
  functionality,
  hideGrid,
  gridAppearence,
}) => {
  const { dimensionTemplate } = useContext(NewPhotoDimensionContext);

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
