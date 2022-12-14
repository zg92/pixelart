import "./new-photo-menu.css";
import { useState, useContext } from "react";
import { NewPhotoDimensionContext } from "../../../context/new-photo-dimension.context";
import { SetMenuContext } from "../../../context/menu-selection.context";

const NewPhotoMenu = () => {
  const [dimensionInput, setDimensionInput] = useState();
  const [inputWarning, setInputWarning] = useState();
  const { setDimension } = useContext(NewPhotoDimensionContext);
  const { setMenuSelect } = useContext(SetMenuContext);

  const inputChecker = (input) => {
    const inputInt = parseInt(input);
    if (Number.isInteger(inputInt) === false) {
      setInputWarning("Input must be an integer!");
      return false;
    }
    if (inputInt > 576) {
      setInputWarning("Input must be < 576!");
      return false;
    }
    if (inputInt < 4) {
      setInputWarning("Input must be > 3!");
      return false;
    }
    if (Math.sqrt(inputInt) % 1 !== 0) {
      setInputWarning("Input must be square number!");
      return false;
    }
    return true;
  };

  const submitDimensions = () => {
    if (inputChecker(dimensionInput) === true) {
      setDimension(dimensionInput);
      setMenuSelect("draw");
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setDimensionInput(value);
  };

  return (
    <div className="new-photo-menu-wrapper">
      <div className="new-photo-input-label">
        Enter pixel dimensions (max 576, must be even, and square-able){" "}
      </div>
      <input
        className="new-photo-input-dimensions"
        name="dimensionInput"
        onChange={handleChange}
      />
      <div className="new-photo-input-label">{inputWarning}</div>
      <div className="submit-button" onClick={submitDimensions}>
        Create New Canvas
      </div>
    </div>
  );
};

export default NewPhotoMenu;
