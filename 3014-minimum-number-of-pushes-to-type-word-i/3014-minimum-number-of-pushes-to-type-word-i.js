/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    count = word.length;
    if(count <= 8) return count;
    else if(count > 8 && count <= 16) return ((count - 8)*2) + 8;
    else if(count > 16 && count <= 24) return (8 * 2) + ((count - 16)*3) + 8;
    else return 48 + ((count - 24)*4);
};