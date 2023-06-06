/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let fq = {}
    for(let i=0; i<nums.length; i++){
        if(fq.hasOwnProperty(nums[i]))
            fq[nums[i]]+=1;
        else
            fq[nums[i]] = 1;
    }
    
    const entries = Object.entries(fq);
    entries.sort((a, b) => b[1] - a[1]);
    
    let output = []
    for(let i=0; i<k; i++){
        output.push(parseInt(entries[i][0]))
    }

    return output;    
};
