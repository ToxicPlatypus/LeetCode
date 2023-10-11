/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let hash = new Map();
    let result = [];

    for(let i=0; i<numbers.length; i++){
        if(target < 0){
            if(numbers[i]<0){
                if(hash.has(target-numbers[i])){
                    result.push(hash.get(target-numbers[i])+1, i+1);
                    return result;
                }
                else{
                    hash.set(numbers[i], i);
                }
            }
            else{
                if(hash.has(target+numbers[i])){
                    result.push(hash.get(target-numbers[i])+1, i+1);
                    return result;
                }
                else{
                    hash.set(numbers[i], i);
                }
            }
        }
        else{
            if(hash.has(target-numbers[i])){
                // console.log(i+1, hash.get(target-numbers[i])+1);
                result.push(hash.get(target-numbers[i])+1, i+1);
                return result;
            }
            else{
                hash.set(numbers[i], i);
            }
        }
    }
};