import { SketchPicker } from "react-color";
import "./color-picker.css";
import { useContext } from "react";
import { ColorContext } from "../../../context/color.context";
import useWindowDimensions from "../../../customHooks/getWindowWidth";

const ColorPicker = () => {
  const { color, setColor } = useContext(ColorContext);

  const colorChange = (e) => {
    setColor(e.hex);
  };

  const windowWidth = useWindowDimensions();

  return (
    <div className="color-picker-wrapper">
      <div className="color-selector-title">Color Selector</div>
      <SketchPicker
        color={color}
        disableAlpha={true}
        width={windowWidth * 0.3 * 0.8}
        onChange={(e) => colorChange(e)}
        className="color"
      />
    </div>
  );
};

export default ColorPicker;
