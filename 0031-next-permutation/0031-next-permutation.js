/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    index = -1
    for(let i = nums.length - 2; i>=0; i--){
       if(nums[i] < nums[i+1]){
        index = i;
        break;
       }
    }

    if(index == -1){
        return nums.reverse();
    }

    for(i=nums.length-1; i>index; i--){
        if(nums[i] > nums[index]){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    nums.splice(index+1, nums.length-index-1, ...nums.slice(index+1).reverse());
    return nums;
};