import { forwardRef } from "react";
import { useContext } from "react";
import { PhotoContext } from "../../../context/photo.context";
import { ShowHideImageContext } from "../../../context/show-hide-image.context";
import useWindowDimensions from "../../../customHooks/getWindowWidth";
import "./image-wrapper.css";

const ImageWrapper = forwardRef((props, ref) => {
  const gridWidth = useWindowDimensions() * 0.7 * 0.8;
  const { showImage } = useContext(ShowHideImageContext);
  const { photoSettings, photoSize, samplePhotoUpload } =
    useContext(PhotoContext);

  return (
    <div
      className="img-wrapper"
      draggable="false"
      style={{
        width: gridWidth + "px",
        height: gridWidth + "px",
      }}
    >
      <img
        src={
          samplePhotoUpload === null
            ? photoSettings.currentPhoto
            : samplePhotoUpload
        }
        style={{
          top: photoSettings.topPosition,
          left: photoSettings.leftPosition,
          height: gridWidth + photoSize * 50 + "px",
          width: gridWidth + photoSize * 50 + "px",
          maxHeight: 800 + photoSize * 50 + "px",
          maxWidth: 800 + photoSize * 50 + "px",
          display: showImage ? "flex" : "none",
        }}
        className="img-overlay"
        alt=""
        draggable="false"
        ref={ref}
      />
    </div>
  );
});

export default ImageWrapper;
