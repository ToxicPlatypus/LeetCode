/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = new Map();
    count = 0;

    for(let i=0; i<nums.length; i++){
        if(!hash.has(nums[i])){
            hash.set(nums[i], 1);
        }
        else{
            hash.set(nums[i], 2);
        }
    }

    for(const x of hash.keys()){
    
        if(hash.get(x) == 1){
            return x;
        }
    }
}