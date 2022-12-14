import { createContext, useState } from "react";

export const ShowHideImageContext = createContext();

export const ShowHideImageContextProvider = ({ children }) => {
  const [showImage, setShowImage] = useState(true);

  const value = {
    showImage,
    setShowImage,
  };

  return (
    <ShowHideImageContext.Provider value={value}>
      {children}
    </ShowHideImageContext.Provider>
  );
};
