import "./top-bar.css";
import brickTexture from "../../../assets/brick.jpg";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../customHooks/getWindowWidth";

const TopBar = () => {
  const [width, setWidth] = useState([]);
  const windowWidth = useWindowDimensions();

  useEffect(() => {
    setWidth(Array(Math.floor(windowWidth / 50)));
  }, [windowWidth]);

  return (
    <div className="top-menu-wrapper">
      <img className="top-menu-img" src={brickTexture} alt="" />
      {width.fill(<img className="top-menu-img" src={brickTexture} alt="" />)}
      <img className="top-menu-img" src={brickTexture} alt="" />
    </div>
  );
};

export default TopBar;
