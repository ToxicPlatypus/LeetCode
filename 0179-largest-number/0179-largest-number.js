/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let isZero = true;

    for(i=0; i<nums.length; i++){
        if(nums[i] != 0){
            isZero = false;
        }
    }

    if(isZero){
        return '0';
    }
    else{
        nums.sort(find_largest);
        return nums.join('')
    }
};

function find_largest(a, b){
    a = String(a);
    b = String(b);

    if(a+b > b+a) return -1
    else if (a+b < b+a) return 1
    else return 0
}