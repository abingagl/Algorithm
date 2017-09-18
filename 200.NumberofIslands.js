/**
 * @param {character[][]} grid
 * @return {number}
 */
const visited = new Set();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let count = 0;

var numIslands = function (grid) {
    if (!grid) return 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1 && !visited.has(`${i}-${j}`)) {
                ++ count;
                floodfillDFS(grid, i, j);
            }
        }
    }
    return count;
};

var floodfillDFS = function (grid, x, y) {
    if (!isValid(grid, x, y)) {
        return 0;
    }
    visited.add(`${x}-${y}`);
    
    for (let k = 0; k < 4; k++) {
        floodfillDFS(grid, x + dx[k], y + dy[k]);
    }
    return 1;
};

var  isValid = function(grid, x, y) {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0] && grid[0].length || 0) {
        return false;
    }
    if (grid[x][y] == 0 || visited.has(`${x}-${y}`)) {
        return false;
    }
    return true;
};



console.log(numIslands(["11000","11000","00100","00011"]))