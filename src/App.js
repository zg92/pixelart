import './App.css';
import CanvasOptions from './components/canvas-options/canvas-options';
import CanvasWrapper from './components/canvas-wrapper/canvas-wrapper';
import ColorPicker from './components/color-picker/color-picker';
import LeftMenu from './components/left-menu/left-menu';
import TopBar from './components/top-bar/top-bar';
import { useContext, useEffect, useState } from 'react';
import NewPhotoMenu from './components/new-photo-menu/new-photo-menu';
import { ShowPhotoMenuContext } from './context/show-photo-menu.context';
import UploadPhotoMenu from './components/upload-photo-menu/upload-photo-menu';

function App() {

  const {showPhotoMenuState, setShowPhotoMenuState} = useContext(ShowPhotoMenuContext)
  const [menuSelect, setMenuSelect] = useState('canvas')

  const menuDirectory = {
    'new': <NewPhotoMenu setMenuSelect={setMenuSelect}/>,
    'show': <UploadPhotoMenu setMenuSelect={setMenuSelect}/>,
    'canvas': <CanvasWrapper />
  }

  return (
    <div className="App">
      <TopBar />
      <div className='canvas-ui'>
        <LeftMenu >
          <CanvasOptions menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
          <ColorPicker />
        </LeftMenu>
        {menuDirectory[menuSelect]}
      </div>
    </div>
  );
}

export default App;
