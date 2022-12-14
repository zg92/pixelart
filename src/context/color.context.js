import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#000000");
  const value = { color, setColor };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
