import "./grid.css";
import { useContext, useEffect } from "react";
import { NewPhotoDimensionContext } from "../../../../context/new-photo-dimension.context";
import generateGrid from "../../../utilities/grid-utilities";
import { ScreenshotContext } from "../../../../context/screenshot.context";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import useWindowDimensions from "../../../../customHooks/getWindowWidth";
import GridItem from "../grid-items/grid-item";
import { forwardRef } from "react";

const Grid = forwardRef(({ functionality, mode, hideGrid }, gridWrapperRef) => {
  const { dimension, dimensionTemplate } = useContext(NewPhotoDimensionContext);
  const { createScreenshot, setCreateScreenshot } =
    useContext(ScreenshotContext);

  const gridWidth = useWindowDimensions() * 0.7 * 0.8;

  const gridAppearence = {
    true: { border: "0px solid white" },
    false: { border: "1px solid black" },
  };

  // Screenshot logic
  const takeScreenshot = async () => {
    const canvas = await html2canvas(gridWrapperRef.current, {
      allowTaint: true,
    });
    downloadImage(canvas);
  };

  const downloadImage = async (canvas) => {
    const imageData = canvas.toDataURL("image/png", 1.0);
    downloadjs(imageData, "download.png", "image/png");
  };

  const updateGridChildren = (children, update) => {
    for (let node of children) {
      node.style.border = update["border"];
    }
  };

  useEffect(() => {
    if (createScreenshot === true) {
      const gridItems = gridWrapperRef.current.children;
      updateGridChildren(gridItems, gridAppearence[true]);
      takeScreenshot();

      updateGridChildren(gridItems, gridAppearence[false]);
      setCreateScreenshot(false);
    }
  }, [createScreenshot]);

  //End of screenshot logic

  return (
    <div
      className="grid-wrapper"
      ref={gridWrapperRef}
      style={{
        gridTemplateColumns: `repeat(${dimensionTemplate}, ${
          100 / dimensionTemplate
        }%)`,
        gridTemplateRows: `repeat(${dimensionTemplate}, ${
          100 / dimensionTemplate
        }%)`,
        width: gridWidth + "px",
        height: gridWidth + "px",
      }}
    >
      {generateGrid(dimension).map((gridItemName) => (
        <GridItem
          gridItemName={gridItemName}
          functionality={functionality}
          mode={mode}
          hideGrid={hideGrid}
          gridAppearence={gridAppearence}
        />
      ))}
    </div>
  );
});

export default Grid;
