/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    if(nums[0] < 0){
        nums[0] = 0;
    }

    for(i=1; i<nums.length; i++){
        let currentMax = nums[i] + nums[i-1];
        max = Math.max(currentMax, nums[i], max);
        
        if(currentMax < 0) currentMax = 0;
        nums[i] = currentMax;
    }
    return max;
};