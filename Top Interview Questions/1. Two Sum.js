/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map();

    for(let i=0; i<nums.length; i++){
        if(hash.has(target-nums[i])){
            return[hash.get(target-nums[i]), i]
        }
        hash.set(nums[i], i);
    }
    return [];
};