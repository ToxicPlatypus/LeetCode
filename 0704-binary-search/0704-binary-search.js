/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    while(count < nums.length){
        if(nums[count] == target){
            return count;
        }
        count++;
    }
    return -1;
};