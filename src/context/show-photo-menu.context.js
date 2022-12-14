import { createContext, useState } from "react";

export const ShowPhotoMenuContext = createContext();

export const ShowPhotoMenuContextProvider = ({ children }) => {
  const [photoMenuState, setPhotoMenuState] = useState(true);

  const value = {
    photoMenuState,
    setPhotoMenuState,
  };

  return (
    <ShowPhotoMenuContext.Provider value={value}>
      {children}
    </ShowPhotoMenuContext.Provider>
  );
};
