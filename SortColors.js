/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let i = 1; i < nums.length; i ++) {
        let j = i;
        let curr = i;
        while (j > 0 && j--) {
            if (nums[curr] < nums[j]) {
                [nums[j], nums[curr]] = [nums[curr], nums[j]]
                curr = j;
            }
        }
    }
    console.log(nums);
};

sortColors([0, -1, 1, -2, 3]);