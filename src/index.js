import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorProvider } from "./context/color.context";
import { NewPhotoDimensionContextProvider } from "./context/new-photo-dimension.context";
import { ShowPhotoMenuContextProvider } from "./context/show-photo-menu.context";
import { ScreenshotContextProvider } from "./context/screenshot.context";
import { PhotoContextProvider } from "./context/photo.context";
import { SetMenuContextProvider } from "./context/menu-selection.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <PhotoContextProvider>
        <SetMenuContextProvider>
          <NewPhotoDimensionContextProvider>
            <ShowPhotoMenuContextProvider>
              <ScreenshotContextProvider>
                <App />
              </ScreenshotContextProvider>
            </ShowPhotoMenuContextProvider>
          </NewPhotoDimensionContextProvider>
        </SetMenuContextProvider>
      </PhotoContextProvider>
    </ColorProvider>
  </React.StrictMode>
);
