/**
 * https://leetcode.com/problems/two-sum/description/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums) return [];

    var mapping = {};
    var len = nums.length;
    for (let i = 0; i < len; i++) {
        var x = nums[i];
        let y = target - x;
        if (mapping[y] || mapping[y] === 0) {
            return [mapping[y], i];
        }
        mapping[x] = i
    }
};

console.log(twoSum([2, 7, 11, 15], 9));