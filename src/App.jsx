import React from "react";
import MazeDesigner from "./components/MazeDesigner";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Maze Designer</h1>
      </header>
      <MazeDesigner />
    </div>
  );
};

export default App;
