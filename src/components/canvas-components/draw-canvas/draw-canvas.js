import "./draw-canvas.css";
import { useContext, useRef } from "react";
import { ColorContext } from "../../../context/color.context";
import Grid from "../grid-components/grid/grid";
import ImageWrapper from "../image-wrapper/image-wrapper";

const DrawCanvas = () => {
  const { color } = useContext(ColorContext);

  const gridWrapperRef = useRef();

  const addPixelColor = (e) => {
    const pixelSelected = document.getElementsByClassName(
      e.target.classList[1]
    );
    if (pixelSelected[0].style["background-color"] !== "") {
      pixelSelected[0].style["background-color"] = "";
    } else {
      pixelSelected[0].style.background = color;
    }
  };

  return (
    <div className="draw-wrapper">
      <div className="draw-grid-image-wrapper">
        <ImageWrapper />
      </div>
      <div className="draw-grid-wrapper">
        <Grid
          functionality={addPixelColor}
          mode={"draw"}
          hideGrid={false}
          ref={gridWrapperRef}
        />
      </div>
    </div>
  );
};

export default DrawCanvas;
