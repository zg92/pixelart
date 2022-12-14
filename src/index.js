import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorProvider } from "./context/color.context";
import { GridDimensionContextProvider } from "./context/grid-dimension.context";
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
          <GridDimensionContextProvider>
            <ShowHideImageContextProvider>
              <ScreenshotContextProvider>
                <App />
              </ScreenshotContextProvider>
            </ShowHideImageContextProvider>
          </GridDimensionContextProvider>
        </SetMenuContextProvider>
      </PhotoContextProvider>
    </ColorProvider>
  </React.StrictMode>
);
