/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
    let max = nums[0];
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i];
        max = max < temp ? temp : max;
        if (temp < 0) {
            temp = 0;
        }
    }
    return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1]));
