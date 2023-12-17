var divideArray = function (nums, k) {
  if (nums.length % 3 != 0) return [];
  nums = nums.sort((a, b) => a - b);
  result = [];
  
  for(i=0; i<nums.length-2; i+=3){
    if(nums[i+2] - nums[i] <= k)
        result.push([nums[i], nums[i+1], nums[i+2]])
    else
        return [];
  }
  return result;
};