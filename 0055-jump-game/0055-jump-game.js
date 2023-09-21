/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goalPost = nums.length - 1;
    
    for(let i=nums.length-2; i>=0; i--){
        if(i + nums[i] >= goalPost)
            goalPost = i;
    }
    // console.log(goalPost == 0 ? true : false);
    return goalPost == 0 ? true : false;
};