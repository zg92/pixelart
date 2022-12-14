import { useState, useEffect } from "react";

const getWindowWidth = () => {
  const { innerWidth } = window;
  return innerWidth;
};

const useWindowDimensions = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export default useWindowDimensions;
