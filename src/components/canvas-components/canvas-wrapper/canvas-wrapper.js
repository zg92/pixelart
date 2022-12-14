import DrawCanvas from "../draw-canvas/draw-canvas";
import NewPhotoMenu from "../new-photo-menu/new-photo-menu";
import UploadCanvas from "../upload-photo-menu/upload-canvas/upload-canvas";
import "./canvas-wrapper.css";
import { useContext, useState } from "react";
import { SetMenuContext } from "../../../context/menu-selection.context";

const CanvasWrapper = () => {
  const { menuSelect } = useContext(SetMenuContext);

  const menuDirectory = {
    new: <NewPhotoMenu />,
    upload: <UploadCanvas />,
    draw: <DrawCanvas />,
  };

  return <div className="canvas-wrapper">{menuDirectory[menuSelect]}</div>;
};

export default CanvasWrapper;
