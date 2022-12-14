import { createContext, useState } from "react";
import mushroom from "../assets/mushroom.png";

export const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const [photoSettings, setPhotoSettings] = useState({
    currentPhoto: mushroom,
    leftPosition: null,
    topPosition: null,
  });
  const [photoSize, setPhotoSize] = useState(0);
  const [samplePhotoUpload, setSamplePhotoUpload] = useState(null);

  const value = {
    photoSettings,
    setPhotoSettings,
    photoSize,
    setPhotoSize,
    samplePhotoUpload,
    setSamplePhotoUpload,
  };

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};
