export const generateEmptyMaze = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0)); 
