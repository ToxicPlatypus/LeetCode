var maxSubArray = function(nums) {
    let max = nums[0], currentMax = nums[0];
    for(i=1; i<nums.length; i++){
        currentMax = Math.max(nums[i], currentMax+nums[i]);
        max = Math.max(currentMax, max);
    }
    return max;
};
