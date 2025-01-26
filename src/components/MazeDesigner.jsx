import React, { useState, useCallback, useEffect } from "react";
import MazeGrid from "./MazeGrid";
import Controls from "./Controls";
import Petals from "./Petals"; // Import Petals component
import { generateEmptyMaze } from "../utils/helpers";
import html2canvas from "html2canvas";

const MazeDesigner = () => {
  const [gridSize, setGridSize] = useState(10); // Default grid size
  const [maze, setMaze] = useState(generateEmptyMaze(gridSize));

  // Regenerate the maze when gridSize changes
  useEffect(() => {
    setMaze(generateEmptyMaze(gridSize));
  }, [gridSize]);

  // Toggle cell between path (0) and wall (1)
  const updateCell = (row, col) => {
    setMaze((prevMaze) => {
      const newMaze = prevMaze.map((rowArr) => rowArr.slice()); // Create a deep copy of the maze
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
      <Petals /> {/* Add the continuously falling petals component */}
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
