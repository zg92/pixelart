import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorProvider } from "./context/color.context";
import { NewPhotoDimensionContextProvider } from "./context/new-photo-dimension.context";
import { ScreenshotContextProvider } from "./context/screenshot.context";
import { PhotoContextProvider } from "./context/photo.context";
import { SetMenuContextProvider } from "./context/menu-selection.context";
import { ShowHideImageContextProvider } from "./context/show-hide-image.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <PhotoContextProvider>
        <SetMenuContextProvider>
          <NewPhotoDimensionContextProvider>
            <ShowHideImageContextProvider>
              <ScreenshotContextProvider>
                <App />
              </ScreenshotContextProvider>
            </ShowHideImageContextProvider>
          </NewPhotoDimensionContextProvider>
        </SetMenuContextProvider>
      </PhotoContextProvider>
    </ColorProvider>
  </React.StrictMode>
);
