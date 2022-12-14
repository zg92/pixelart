import { createContext, useState } from "react";

export const SetMenuContext = createContext();

export const SetMenuContextProvider = ({ children }) => {
  const [menuSelect, setMenuSelect] = useState("draw");

  const value = {
    menuSelect,
    setMenuSelect,
  };

  return (
    <SetMenuContext.Provider value={value}>{children}</SetMenuContext.Provider>
  );
};
