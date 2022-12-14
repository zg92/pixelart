import { createContext, useState, useRef } from "react";

export const ScreenshotContext = createContext();

export const ScreenshotContextProvider = ({ children }) => {
  const [createScreenshot, setCreateScreenshot] = useState(false);
  const value = { createScreenshot, setCreateScreenshot };

  return (
    <ScreenshotContext.Provider value={value}>
      {children}
    </ScreenshotContext.Provider>
  );
};
