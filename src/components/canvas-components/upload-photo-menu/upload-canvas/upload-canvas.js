import "./upload-canvas.css";
import { useState, useContext, useRef, useEffect } from "react";
import Grid from "../../grid-components/grid/grid";
import { PhotoContext } from "../../../../context/photo.context";
import useWindowDimensions from "../../../../customHooks/getWindowWidth";
import UploadCanvasButtons from "../upload-canvas-buttons/upload-canvas-buttons";
import ImageWrapper from "../../image-wrapper/image-wrapper";

const UploadCanvas = () => {
  const { photoSettings, setPhotoSettings } = useContext(PhotoContext);
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  const imageRef = useRef();
  const gridWrapperRef = useRef();

  const gridWidth = useWindowDimensions() * 0.7 * 0.8;

  // logic for adding dragging functionality for adjusting image position
  useEffect(() => {
    gridWrapperRef.current.addEventListener("mouseleave", () => {
      imageRef.current.removeEventListener("mousemove", drag);
    });
    imageRef.current.addEventListener("mousedown", () => {
      imageRef.current.addEventListener("mousemove", drag);
    });
    imageRef.current.addEventListener("mouseup", () => {
      imageRef.current.removeEventListener("mousemove", drag);
    });
  }, []);

  const imageLimitCheck = async (currentLeft, currentTop) => {
    if (parseInt(currentLeft) >= gridWidth * 0.4) {
      imageRef.current.style.left = gridWidth * 0.4 + "px";
    }
    if (parseInt(currentLeft) <= -1 * gridWidth * 0.4) {
      imageRef.current.style.left = -1 * gridWidth * 0.4 + "px";
    }
    if (parseInt(currentTop) >= gridWidth * 0.4) {
      imageRef.current.style.top = gridWidth * 0.4 + "px";
    }
    if (parseInt(currentTop) <= -1 * gridWidth * 0.4) {
      imageRef.current.style.top = -1 * gridWidth * 0.4 + "px";
    }
    setPhotoSettings({
      ...photoSettings,
      leftPosition: currentLeft,
      topPosition: currentTop,
    });
  };

  const drag = async ({ movementX, movementY }) => {
    const getStyle = window.getComputedStyle(imageRef.current);
    const currentLeft = parseInt(getStyle.left) + movementX + "px";
    const currentTop = parseInt(getStyle.top) + movementY + "px";
    imageRef.current.style.left = currentLeft;
    imageRef.current.style.top = currentTop;
    await imageLimitCheck(currentLeft, currentTop);
  };

  return (
    <div className="upload-wrapper">
      <ImageWrapper ref={imageRef} />
      <div className="upload-grid-wrapper">
        <Grid mode={"upload"} hideGrid={showGridOverlay} ref={gridWrapperRef} />
      </div>
      <UploadCanvasButtons
        setShowGridOverlay={setShowGridOverlay}
        showGridOverlay={showGridOverlay}
      />
    </div>
  );
};

export default UploadCanvas;
