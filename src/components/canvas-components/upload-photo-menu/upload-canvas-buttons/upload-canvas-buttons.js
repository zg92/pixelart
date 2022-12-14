import React from "react";
import { forwardRef } from "react";
import { useContext } from "react";
import { SetMenuContext } from "../../../../context/menu-selection.context";
import { GridDimensionContext } from "../../../../context/grid-dimension.context";
import { PhotoContext } from "../../../../context/photo.context";
import { ShowHideImageContext } from "../../../../context/show-hide-image.context";
import useWindowDimensions from "../../../../customHooks/getWindowWidth";
import mushroom from "../../../../assets/mushroom.png";
import "./upload-canvas-buttons.css";

const UploadCanvasButtons = forwardRef(
  ({ showGridOverlay, setShowGridOverlay }, ref) => {
    const { setShowImage } = useContext(ShowHideImageContext);
    const {
      photoSettings,
      setPhotoSettings,
      photoSize,
      setPhotoSize,
      setSamplePhotoUpload,
      samplePhotoUpload,
    } = useContext(PhotoContext);
    const { setMenuSelect, menuSelect } = useContext(SetMenuContext);
    const { setDimension, dimension } = useContext(GridDimensionContext);

    const gridWidth = useWindowDimensions() * 0.7 * 0.8;

    const menuToggle = (menu) => {
      setMenuSelect(menu);
      if (menu === menuSelect) {
        setMenuSelect("draw");
      }
    };

    const setSamplePhoto = (e) => {
      setSamplePhotoUpload(URL.createObjectURL(e.target.files[0]));
    };

    const submitPhoto = () => {
      setPhotoSettings({
        ...photoSettings,
        currentPhoto: samplePhotoUpload,
      });
      setMenuSelect("draw");
      setShowImage(true);
    };

    const adjustImageSize = (e) => {
      setPhotoSize(e.target.value);
    };

    const adjustGridSize = (e) => {
      setDimension(e.target.value);
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
          Upload New Trace Image
          <input
            className="upload-button upload-file"
            type="file"
            onChange={setSamplePhoto}
          />
        </div>
        <div
          className="upload-button"
          onClick={
            samplePhotoUpload === mushroom ||
            !samplePhotoUpload ||
            photoSettings.currentPhoto === samplePhotoUpload
              ? null
              : submitPhoto
          }
          style={{
            background:
              samplePhotoUpload === null ||
              samplePhotoUpload === photoSettings.currentPhoto
                ? "grey"
                : "#E29578",
          }}
        >
          Save Uploaded Trace Image
        </div>

        <div className="upload-button" onClick={showGrid}>
          {showGridOverlay ? "Show" : "Hide"} Grid Overlay
        </div>

        <div
          className="upload-button"
          onClick={() => {
            menuToggle("draw");
          }}
        >
          Save and Return to Draw
        </div>

        <div className="slider-wrapper">
          <span className="slider-label">Adjust Image Size</span>
          <input
            type="range"
            min="-3"
            max="3"
            value={photoSize}
            className="slider"
            onChange={adjustImageSize}
          />
        </div>
        <div className="slider-wrapper">
          <span className="slider-label">Adjust Grid Size</span>
          <input
            type="range"
            min="0"
            max="19"
            value={dimension}
            className="slider"
            onChange={adjustGridSize}
          />
        </div>
      </div>
    );
  }
);

export default UploadCanvasButtons;
