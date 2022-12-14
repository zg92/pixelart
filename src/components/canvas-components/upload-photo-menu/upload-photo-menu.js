import "./upload-photo-menu.css";
import { useState, useContext, useRef, useEffect } from "react";
import { ShowPhotoMenuContext } from "../../../../context/show-photo-menu.context";
import Grid from "../../grid/grid";
import { PhotoContext } from "../../../../context/photo.context";
import useGridDimensions from "../../../customHooks/getGridWidth";

const UploadPhotoMenu = ({ setMenuSelect }) => {
  const imageRef = useRef(document.querySelector(".show-photo-img"));
  const { setPhotoMenuState } = useContext(ShowPhotoMenuContext);
  const { photoSettings, setPhotoSettings } = useContext(PhotoContext);
  const [samplePhotoUpload, setSamplePhotoUpload] = useState();
  const [showGridOverlay, setShowGridOverlay] = useState(true);

  const setSamplePhoto = (e) => {
    setSamplePhotoUpload(URL.createObjectURL(e.target.files[0]));
  };

  const submitPhoto = () => {
    if (samplePhotoUpload !== undefined) {
      setPhotoSettings({
        ...photoSettings,
        currentPhoto: samplePhotoUpload,
      });
    }
    setMenuSelect("canvas");
    setPhotoMenuState(true);
  };

  const showGrid = () => {
    showGridOverlay ? setShowGridOverlay(false) : setShowGridOverlay(true);
    if (showGridOverlay === true) {
      imageRef.current.style.opacity = "40%";
    } else {
      imageRef.current.style.opacity = "100%";
    }
  };

  const adjustImageSize = async (e) => {
    await setPhotoSettings({ ...photoSettings, photoSize: e.target.value });
  };

  useEffect(() => {
    imageRef.current.style.height =
      useGridDimensions() + photoSettings.photoSize * 100 + "px";
    imageRef.current.style.width =
      useGridDimensions() + photoSettings.photoSize * 100 + "px";
  }, [photoSettings]);

  useEffect(() => {
    imageRef.current.addEventListener("mousedown", () => {
      imageRef.current.addEventListener("mousemove", drag);
    });
    imageRef.current.addEventListener("mouseup", () => {
      imageRef.current.removeEventListener("mousemove", drag);
    });
  });

  const drag = ({ movementX, movementY }) => {
    const getStyle = window.getComputedStyle(imageRef.current);
    const currentLeft = parseInt(getStyle.left) + movementX + "px";
    const currentTop = parseInt(getStyle.top) + movementY + "px";
    imageRef.current.style.left = currentLeft;
    imageRef.current.style.top = currentTop;

    if (parseInt(currentLeft) >= useGridDimensions() - 100) {
      imageRef.current.style.left =
        useGridDimensions() - useGridDimensions() * 0.2 + "px";
    }
    if (parseInt(currentLeft) <= -useGridDimensions() - 100) {
      imageRef.current.style.left =
        -useGridDimensions() - useGridDimensions() * 0.2 + "px";
    }
    if (parseInt(currentTop) >= useGridDimensions() - 100) {
      imageRef.current.style.top =
        useGridDimensions() - useGridDimensions() * 0.2 + "px";
    }
    if (parseInt(currentTop) <= -useGridDimensions() - 100) {
      imageRef.current.style.top =
        -useGridDimensions() - useGridDimensions() * 0.2 + "px";
    }
    setPhotoSettings({
      ...photoSettings,
      leftPosition: currentLeft,
      topPosition: currentTop,
    });
  };

  return (
    <div className="show-photo-menu-wrapper">
      <Grid
        image={
          <div
            className="img-wrapper"
            style={{
              height: useGridDimensions() + "px",
              width: useGridDimensions() + "px",
            }}
          >
            <img
              src={
                samplePhotoUpload === undefined
                  ? photoSettings.currentPhoto
                  : samplePhotoUpload
              }
              className="show-photo-img"
              ref={imageRef}
              draggable="false"
              alt="Current art cannot be rendered"
              style={{
                height: useGridDimensions() + "px",
                width: useGridDimensions() + "px",
              }}
            />
          </div>
        }
        mode={"upload"}
        displayToggle={showGridOverlay}
      />
      <div className="show-photo-button-wrapper">
        <input
          className="show-photo-browse-button"
          type="file"
          onChange={setSamplePhoto}
        />
        <button className="show-photo-grid-button" onClick={showGrid}>
          Show Grid
        </button>
        <div className="show-photo-size-wrapper">
          <span> Adjust Size</span>
          <input
            type="range"
            min="-3"
            max="3"
            value={photoSettings.photoSize}
            className="show-photo-size-slider"
            onChange={(e) => adjustImageSize(e)}
          />
        </div>
        <button className="show-photo-submit-button" onClick={submitPhoto}>
          Submit Photo
        </button>
      </div>
    </div>
  );
};

export default UploadPhotoMenu;
