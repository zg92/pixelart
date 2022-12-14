import { forwardRef } from "react";
import { useContext } from "react";
import { PhotoContext } from "../../../context/photo.context";
import { ShowPhotoMenuContext } from "../../../context/show-photo-menu.context";
import useWindowDimensions from "../../../customHooks/getWindowWidth";
import "./image-wrapper.css";

const ImageWrapper = forwardRef(({ size }, ref) => {
  const gridWidth = useWindowDimensions() * 0.7 * 0.8;
  const { photoMenuState } = useContext(ShowPhotoMenuContext);
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
      {photoMenuState ? (
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
          }}
          className="img-overlay"
          alt=""
          draggable="false"
          ref={ref}
        />
      ) : null}
    </div>
  );
});

export default ImageWrapper;
