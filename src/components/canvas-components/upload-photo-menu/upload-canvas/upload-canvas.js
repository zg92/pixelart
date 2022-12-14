import "./upload-canvas.css";
import { useState, useContext, useRef, useEffect } from "react";
import Grid from "../../grid-components/grid/grid";
import { PhotoContext } from "../../../../context/photo.context";
import UploadCanvasButtons from "../upload-canvas-buttons/upload-canvas-buttons";
import ImageWrapper from "../../image-wrapper/image-wrapper";
import useGridDimensions from "../../../../customHooks/getGridWidth";

const UploadCanvas = () => {
  const { photoSettings, setPhotoSettings } = useContext(PhotoContext);
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  const imageRef = useRef();
  const gridWrapperRef = useRef();

  const gridBoundry = useGridDimensions() * 0.4;

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
    if (parseInt(currentLeft) >= gridBoundry) {
      imageRef.current.style.left = gridBoundry + "px";
    }
    if (parseInt(currentLeft) <= -gridBoundry) {
      imageRef.current.style.left = -gridBoundry + "px";
    }
    if (parseInt(currentTop) >= gridBoundry) {
      imageRef.current.style.top = gridBoundry + "px";
    }
    if (parseInt(currentTop) <= -gridBoundry) {
      imageRef.current.style.top = -gridBoundry + "px";
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
  // end of image dragging logic

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
