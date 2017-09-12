/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || !matrix[0]) {
        return [];
    }

    const result = [];

    let rowBegin = 0, rowEnd = matrix.length - 1;
    let colBegin = 0, colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse Right
        for (let i = colBegin; i <= colEnd; i++) {
            result.push(matrix[rowBegin][i]);
        }
        rowBegin ++;

        // Traverse Down
        for (let j = rowBegin; j <= rowEnd; j++) {
            result.push(matrix[j][colEnd]);
        }
        colEnd --;

        // Traverse Left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd --;

        // Traverse Up
        if (colBegin <= colEnd) {
            for (let j = rowEnd; j >= rowBegin; j--) {
                result.push(matrix[j][colBegin]);
            }
        }
        colBegin ++;
    }

    return result;
};

var matrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

matrix = [
    [2, 3]
]
console.log(spiralOrder(matrix))