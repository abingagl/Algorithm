// 1.排序
// 2.优先队列(js没有原生实现)
// 3.分治(leetcode 超时)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return findKthLarger(nums, 0, nums.length - 1, k - 1);
};

var findKthLarger = function (nums, left, right, k) {
    let target = nums[right];
    const [o_left, o_right] = [left, right];
    while (left < right) {
        while (left < right && nums[left] > target) left++;
        while (left < right && nums[right] <= target) right--;
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    [nums[left], nums[o_right]] = [nums[o_right], nums[left]];
    if (left > k) {
        return findKthLarger(nums, o_left, left - 1, k);
    } else if (left < k) {
        return findKthLarger(nums, left + 1, o_right, k);
    } else {
        return nums[left];
    }
};


console.log(findKthLargest([-1,2,0], 3))