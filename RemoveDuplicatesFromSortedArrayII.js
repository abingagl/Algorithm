/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i = 0;
    var result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < 2 || nums[i] > nums[i - 2]) {
            result++;
        }
    }
    return result;
};


console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))

console.log(removeDuplicates([1, 1, 1, 2]))

console.log(removeDuplicates([1, 1]))