import { useState, useEffect } from "react";

const getGridWidth = () => {
  const { innerWidth } = window;
  return innerWidth * 0.7 * 0.8;
};

const useGridDimensions = () => {
  const [gridWidth, setGridWidth] = useState(getGridWidth);

  useEffect(() => {
    const handleResize = () => {
      setGridWidth(getGridWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return gridWidth;
};

export default useGridDimensions;
