import "./canvas-options.css";
import { ShowHideImageContext } from "../../../context/show-hide-image.context";
import { useContext } from "react";
import { ScreenshotContext } from "../../../context/screenshot.context";
import { SetMenuContext } from "../../../context/menu-selection.context";

const CanvasOptions = () => {
  const { showImage, setShowImage } = useContext(ShowHideImageContext);
  const { createScreenshot, setCreateScreenshot } =
    useContext(ScreenshotContext);
  const { menuSelect, setMenuSelect } = useContext(SetMenuContext);

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
      <div className="buttons-set-title">Canvas Actions</div>
      <div
        className="left-button"
        onClick={menuSelect === "draw" ? null : () => menuToggle("draw")}
        style={{ background: menuSelect === "draw" ? "grey" : null }}
      >
        {menuSelect !== "draw" ? "Return to " : ""}
        Draw Screen
      </div>
      <div
        className="left-button"
        value="save"
        onClick={menuSelect === "draw" ? takeScreenshot : null}
        style={{ background: menuSelect !== "draw" ? "grey" : null }}
      >
        Save Pixel Art to .PNG
      </div>
      <div className="buttons-set-title">Canvas Options</div>
      <div
        className="left-button"
        onClick={() => {
          setShowImage(true);
          menuToggle("upload");
        }}
      >
        Set Trace Image
      </div>
      <div className="buttons-set-title">Current Image Actions</div>
      <div
        className="left-button"
        onClick={menuSelect === "draw" ? activateOverlay : null}
        style={{ background: menuSelect !== "draw" ? "grey" : null }}
      >
        {showImage ? "Hide" : "Show"} Trace Image
      </div>
    </div>
  );
};

export default CanvasOptions;
