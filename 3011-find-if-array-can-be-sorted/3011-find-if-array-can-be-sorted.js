var canSortArray = function(nums) {
  i=0;
  while(i<nums.length-1){
    firstNumberBits = Number(nums[i]).toString(2).split("").filter(it => it ===  '1').length;
    secondNumberBits = Number(nums[i+1]).toString(2).split("").filter(it => it ===  '1').length; 
    if(nums[i] > nums[i+1] && firstNumberBits == secondNumberBits){
      [nums[i] , nums[i+1]] = [nums[i+1], nums[i]];
      i=0;
    }
    else if(nums[i] > nums[i+1] && firstNumberBits != secondNumberBits){
      return false;
    }
    else{
      i++
    };
  }
  return checkSorted(nums);
};

function checkSorted(arr){
  const sortArr = [...arr].sort((a,b) => a-b);
  return JSON.stringify(arr) === JSON.stringify(sortArr);
}