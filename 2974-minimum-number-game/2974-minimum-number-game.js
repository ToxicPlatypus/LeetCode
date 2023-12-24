var numberGame = function(nums) {
    len = nums.length;
    result = [];
    nums.sort((a, b) => a - b);
    for(i=0; i < len; i+=2){
        if(i+1 < len)
            result.push(nums[i+1]);
        result.push(nums[i]);
    }
    return result;
};