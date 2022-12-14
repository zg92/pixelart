import "./slider-input.css";

const SliderInput = ({ label, min, max, value, functionality }) => {
  return (
    <div className="slider-wrapper">
      <span className="slider-label">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="slider"
        onChange={functionality}
      />
    </div>
  );
};

export default SliderInput;
