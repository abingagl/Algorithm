/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
    if (!nums) return [];
    nums = nums.sort((a, b) => (a - b));
    console.log(nums)
    const { length } = nums;
    const result = [];
    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let temp = target - nums[i] - nums[j];
            let lo = j + 1;
            let hi = length - 1;
            while (lo < hi) {
                if (lo > j + 1 && nums[lo] === nums[lo - 1]) {
                    lo ++;
                    continue;
                }

                if (nums[lo] + nums[hi] === temp) {
                    result.push([nums[i], nums[j], nums[lo], nums[hi]]);
                    lo ++;
                    hi --;
                } else if (nums[lo] + nums[hi] > temp) {
                    hi --;
                } else {
                    lo ++;
                }
            }
        }
    }
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
