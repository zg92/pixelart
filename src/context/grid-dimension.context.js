import { createContext, useState } from "react";

export const GridDimensionContext = createContext();

export const GridDimensionContextProvider = ({ children }) => {
  const [dimension, setDimension] = useState(1);

  const gridSizeIndex = {
    0: 25,
    1: 36,
    2: 49,
    3: 64,
    4: 81,
    5: 100,
    6: 121,
    7: 144,
    8: 169,
    9: 196,
    10: 225,
    11: 256,
    12: 289,
    13: 324,
    14: 361,
    15: 400,
    16: 441,
    17: 484,
    18: 529,
    19: 576,
  };

  const dimensionTemplate = Math.sqrt(parseInt(gridSizeIndex[dimension]));
  const convertedDimension = gridSizeIndex[dimension];

  const value = {
    dimension,
    setDimension,
    dimensionTemplate,
    convertedDimension,
  };

  return (
    <GridDimensionContext.Provider value={value}>
      {children}
    </GridDimensionContext.Provider>
  );
};
