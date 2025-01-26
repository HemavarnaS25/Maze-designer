import React from "react";

const Controls = ({ gridSize, setGridSize, resetMaze, saveMaze }) => {
  return (
    <div className="controls">
      <label>
        Grid Size:
        <input
          type="number"
          value={gridSize}
          min="5"
          max="15" // Set the maximum grid size to 15
          onChange={(e) => setGridSize(Number(e.target.value))}
        />
      </label>
      <button onClick={resetMaze}>Reset Maze</button>
      <button onClick={saveMaze}>Save as PNG</button> {/* Consistent button text */}
    </div>
  );
};

export default Controls;
