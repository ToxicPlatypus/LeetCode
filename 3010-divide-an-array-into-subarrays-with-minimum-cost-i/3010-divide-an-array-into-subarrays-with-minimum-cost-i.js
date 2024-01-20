/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    sum = nums[0];
    nums.shift();
    nums.sort(function(a, b){ return a - b });
    sum = sum + nums[0] + nums[1];
    return sum;
};