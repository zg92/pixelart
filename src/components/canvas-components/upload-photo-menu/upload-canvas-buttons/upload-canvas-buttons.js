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
import SliderInput from "../../../utility-components/slider-input/slider-input";
import Button from "../../../utility-components/button/button";

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
        <Button
          className="upload-button-wrapper"
          label={"Upload New Trace Image"}
        >
          <input
            className="upload-button upload-file"
            type="file"
            onChange={setSamplePhoto}
          />
        </Button>
        <Button
          className="upload-button"
          label={"Save Uploaded Trace Image"}
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
        />

        <Button
          className="upload-button"
          onClick={showGrid}
          label={showGridOverlay ? "Show Grid Overlay" : "Hide Grid Overlay"}
        />

        <Button
          className="upload-button"
          label={"Save and Return to Draw"}
          onClick={() => {
            menuToggle("draw");
          }}
        />

        <SliderInput
          label={"Adjust Image Size"}
          min={-3}
          max={3}
          value={photoSize}
          functionality={adjustImageSize}
        />

        <SliderInput
          label={"Adjust Grid Size"}
          min={0}
          max={19}
          value={dimension}
          functionality={adjustGridSize}
        />
      </div>
    );
  }
);

export default UploadCanvasButtons;
