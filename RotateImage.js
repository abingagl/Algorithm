/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i > j) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const t = matrix[i].length - j - 1;
            if (j < t) {
                [matrix[i][j], matrix[i][t]] = [matrix[i][t], matrix[i][j]]
            }
        }
    }
    console.log(matrix);
};



var matrix = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
rotate(matrix)