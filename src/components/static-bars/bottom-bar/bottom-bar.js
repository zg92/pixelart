import "./bottom-bar.css";
import backgroundTexture from "../../../assets/backgroundTexture.png";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../customHooks/getWindowWidth";

const BottomBar = () => {
  const [width, setWidth] = useState([]);
  const windowWidth = useWindowDimensions();

  useEffect(() => {
    setWidth(Array(Math.floor(windowWidth / 50)));
  }, [windowWidth]);

  return (
    <div className="bottom-menu-wrapper">
      <img className="bottom-menu-img" src={backgroundTexture} alt="" />
      {width.fill(
        <img className="bottom-menu-img" src={backgroundTexture} alt="" />
      )}
      <img className="bottom-menu-img" src={backgroundTexture} alt="" />
    </div>
  );
};

export default BottomBar;
