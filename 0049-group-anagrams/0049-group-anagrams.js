/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map();

    strs.forEach(string => {
        let sorted = string.split("").sort().join("");
        if(hash[sorted]){
            hash[sorted].push(string);
        }

        else{
            hash[sorted] = [string];
        }
    })

    return Object.values(hash);
};
