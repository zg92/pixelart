import "./App.css";
import CanvasWrapper from "./components/canvas-components/canvas-wrapper/canvas-wrapper";
import LeftMenu from "./components/left-menu-components/left-menu/left-menu";
import TopBar from "./components/static-bars/top-bar/top-bar";
import BottomBar from "./components/static-bars/bottom-bar/bottom-bar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="app-wrapper">
        <LeftMenu />
        <CanvasWrapper />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
