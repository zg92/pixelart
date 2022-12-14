/* eslint-disable react-hooks/exhaustive-deps */
import "./grid.css";
import { useContext, useEffect } from "react";
import { GridDimensionContext } from "../../../../context/grid-dimension.context";
import generateGrid from "../../../utilities/grid-utilities";
import { ScreenshotContext } from "../../../../context/screenshot.context";
import domtoimage from "dom-to-image";
import downloadjs from "downloadjs";
import GridItem from "../grid-items/grid-item";
import { forwardRef } from "react";
import useGridDimensions from "../../../../customHooks/getGridWidth";

const Grid = forwardRef(({ functionality, mode, hideGrid }, gridWrapperRef) => {
  const { convertedDimension, dimensionTemplate } =
    useContext(GridDimensionContext);
  const { createScreenshot, setCreateScreenshot } =
    useContext(ScreenshotContext);

  const gridAppearence = {
    true: { border: "0px solid white" },
    false: { border: "1px solid black" },
  };

  // Screenshot logic
  const takeScreenshot = async () => {
    const canvas = await domtoimage.toPng(gridWrapperRef.current);
    downloadImage(canvas);
  };

  const downloadImage = async (canvas) => {
    downloadjs(canvas, "download.png", "image/png");
  };

  const updateGridChildren = async (children, update) => {
    for (let node of children) {
      node.style.border = update["border"];
    }
  };

  const screenshotProcess = async () => {
    const gridItems = gridWrapperRef.current.children;
    await updateGridChildren(gridItems, gridAppearence[true]);
    await takeScreenshot();
    await updateGridChildren(gridItems, gridAppearence[false]);
    await setCreateScreenshot(false);
  };

  useEffect(() => {
    if (createScreenshot === true) {
      screenshotProcess();
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
        }%`,
        gridTemplateRows: `repeat(${dimensionTemplate}, ${
          100 / dimensionTemplate
        }%)`,
        width: useGridDimensions() - 1 + "px",
        height: useGridDimensions() - 1 + "px",
      }}
    >
      {generateGrid(convertedDimension).map((gridItemName, i) => (
        <GridItem
          gridItemName={gridItemName}
          functionality={functionality}
          mode={mode}
          hideGrid={hideGrid}
          gridAppearence={gridAppearence}
          key={i}
        />
      ))}
    </div>
  );
});

export default Grid;
