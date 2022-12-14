import "./canvas-options.css";
import { ShowHideImageContext } from "../../../context/show-hide-image.context";
import { useContext } from "react";
import { ScreenshotContext } from "../../../context/screenshot.context";

const CanvasOptions = ({ menuSelect, setMenuSelect }) => {
  const { showImage, setShowImage } = useContext(ShowHideImageContext);
  const { createScreenshot, setCreateScreenshot } =
    useContext(ScreenshotContext);

  const menuToggle = (menu) => {
    setMenuSelect(menu);
    if (menu === menuSelect) {
      setMenuSelect("draw");
    }
  };

  const activateOverlay = () => {
    showImage ? setShowImage(false) : setShowImage(true);
  };

  const takeScreenshot = () => {
    createScreenshot ? setCreateScreenshot(false) : setCreateScreenshot(true);
  };

  return (
    <div className="option-wrapper">
      <div className="canvas-buttons-wrapper">
        <div className="buttons-set-title">Canvas Actions</div>
        <div className="left-button" value="save" onClick={takeScreenshot}>
          Save Current Art
        </div>
        <div
          className="left-button"
          onClick={() => {
            menuToggle("new");
          }}
        >
          New Blank Art
        </div>
      </div>
      <div className="overlay-buttons-wrapper">
        <div className="buttons-set-title">Tracing Actions</div>
        <div
          className="left-button"
          onClick={() => {
            setShowImage(true);
            menuToggle("upload");
          }}
        >
          Set Trace Image
        </div>
        <div className="left-button" onClick={activateOverlay}>
          {showImage ? "Hide" : "Show"} Trace Image
        </div>
      </div>
    </div>
  );
};

export default CanvasOptions;
