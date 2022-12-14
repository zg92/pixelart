import React from "react";
import { forwardRef } from "react";
import { useContext } from "react";
import { SetMenuContext } from "../../../../context/menu-selection.context";
import { PhotoContext } from "../../../../context/photo.context";
import { ShowPhotoMenuContext } from "../../../../context/show-photo-menu.context";
import useWindowDimensions from "../../../../customHooks/getWindowWidth";
import "./upload-canvas-buttons.css";

const UploadCanvasButtons = forwardRef(
  ({ showGridOverlay, setShowGridOverlay }, ref) => {
    const { setPhotoMenuState } = useContext(ShowPhotoMenuContext);
    const {
      photoSettings,
      setPhotoSettings,
      photoSize,
      setPhotoSize,
      setSamplePhotoUpload,
    } = useContext(PhotoContext);
    const { setMenuSelect } = useContext(SetMenuContext);

    const gridWidth = useWindowDimensions() * 0.7 * 0.8;

    const setSamplePhoto = (e) => {
      setSamplePhotoUpload(URL.createObjectURL(e.target.files[0]));
    };

    const submitPhoto = () => {
      if (photoSettings.samplePhotoUpload !== null) {
        setPhotoSettings({
          ...photoSettings,
          currentPhoto: photoSettings.samplePhotoUpload,
        });
      }
      setMenuSelect("draw");
      setPhotoMenuState(true);
    };

    const adjustImageSize = (e) => {
      setPhotoSize(e.target.value);
    };
    const showGrid = () => {
      showGridOverlay ? setShowGridOverlay(false) : setShowGridOverlay(true);
    };

    return (
      <div
        className="upload-menu-wrapper"
        ref={ref}
        style={{ width: gridWidth }}
      >
        <div className="upload-button-wrapper">
          Upload New Image
          <input
            className="upload-button upload-file"
            type="file"
            onChange={setSamplePhoto}
          />
        </div>
        <div className="upload-button" onClick={submitPhoto}>
          Save Uploaded Image
        </div>
        <div className="upload-button" onClick={showGrid}>
          Grid Overlay
        </div>
        <div className="show-photo-size-wrapper">
          <span>Adjust Size</span>
          <input
            type="range"
            min="-3"
            max="3"
            value={photoSize}
            className="show-photo-size-slider"
            onChange={adjustImageSize}
          />
        </div>
      </div>
    );
  }
);

export default UploadCanvasButtons;
