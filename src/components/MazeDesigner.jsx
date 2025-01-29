import React, { useState, useCallback, useEffect } from "react";
import MazeGrid from "./MazeGrid";
import Controls from "./Controls";
import { generateEmptyMaze } from "../utils/helpers";
import html2canvas from "html2canvas";
const MazeDesigner = () => {
  const [gridSize, setGridSize] = useState(10);
  const [maze, setMaze] = useState(generateEmptyMaze(gridSize));
  useEffect(() => {
    setMaze(generateEmptyMaze(gridSize));
  }, [gridSize]);
  const updateCell = (row, col) => {
    setMaze((prevMaze) => {
      const newMaze = prevMaze.map((rowArr) => rowArr.slice());
      newMaze[row][col] = newMaze[row][col] === 1 ? 0 : 1;
      return newMaze;
    });
  };
  const resetMaze = useCallback(() => {
    setMaze(generateEmptyMaze(gridSize));
  }, [gridSize]);
  const saveMazeAsImage = () => {
    const mazeGrid = document.getElementById("mazeGrid");
    html2canvas(mazeGrid).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "maze.png";
      link.click();
    });
  };
  return (
    <div className="maze-designer">
      <Controls
        gridSize={gridSize}
        setGridSize={setGridSize}
        resetMaze={resetMaze}
        saveMaze={saveMazeAsImage}
      />
      <div className="maze-grid-container">
        <MazeGrid maze={maze} updateCell={updateCell} gridSize={gridSize} />
      </div>
    </div>
  );
};

export default MazeDesigner;
