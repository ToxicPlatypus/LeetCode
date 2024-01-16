/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b) { return a - b });
    len = nums.length;
    result = [];

    for(let i=0; i<len-2; i++){
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let slow = i+1;
        let fast = len-1;

        while(slow < fast){
            total = nums[i] + nums[slow] + nums[fast];
            if(total > 0){
                fast--;
            }
            else if(total < 0){
                slow++;
            }
            else{
                singleResult = [nums[i], nums[slow], nums[fast]];
                result.push(singleResult);
                slow++;
                fast--;
                while (slow < fast && nums[slow] == nums[slow - 1]) {
                    slow++;
                }
                while (slow < fast && nums[fast] == nums[fast + 1]) {
                    fast--;
                }    
            }
        }

    }
    return result;
};

