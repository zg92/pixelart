import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorProvider } from './context/color.context';
import { NewPhotoDimensionContextProvider } from './context/new-photo-dimension.context';
import { ShowPhotoMenuContextProvider } from './context/show-photo-menu.context';
import { ScreenshotContextProvider } from './context/screenshot.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
     <ColorProvider>
     <NewPhotoDimensionContextProvider >
       <ShowPhotoMenuContextProvider>
        <ScreenshotContextProvider>
    <App />
    </ScreenshotContextProvider>
     </ShowPhotoMenuContextProvider>
    </NewPhotoDimensionContextProvider>
    </ColorProvider>
  </React.StrictMode>
);

