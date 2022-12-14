import React from "react";
import CanvasOptions from "../canvas-options/canvas-options";
import ColorPicker from "../color-picker/color-picker";
import "./left-menu.css";
import { SetMenuContext } from "../../../context/menu-selection.context";
import { useContext } from "react";

const LeftMenu = () => {
  const { setMenuSelect, menuSelect } = useContext(SetMenuContext);

  return (
    <div className="left-menu-wrapper">
      <CanvasOptions menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
      <ColorPicker />
    </div>
  );
};

export default LeftMenu;
