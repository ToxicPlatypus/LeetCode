/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    totalCount = word.length;

    var obj={}
    for(x = 0, length = word.length; x < length; x++) {
        var l = word.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    
    let sortable = [];
for (var a in obj) {
    sortable.push(obj[a]);
}

    sortable.sort(function(a, b){ return b-a });

    count = Object.keys(obj).length;
    // console.log(sortable.length);

    if(sortable.length <= 8) return totalCount;
    else if(sortable.length > 8 && sortable.length <= 16){
        let finalCount = 0;
    for(i=sortable.length-1; i>=0; i--){
        if(i<8){
            finalCount += sortable[i];
        }
        else{
            finalCount+= sortable[i] * 2;    
        }
        
    }
        return finalCount
    } 
    else if(count > 16 && count <= 24) {
        let finalCount = 0;
        for(i=sortable.length-1; i>=0; i--){
            if(i<8){
                finalCount += sortable[i];
            }
            else if(i>=8 && i<16){
                finalCount+= sortable[i] * 2;    
            }
            else{
                finalCount+= sortable[i] * 3;  
            }
            
        }

        return finalCount;
    }
    else{
        let finalCount = 0;
        for(i=sortable.length-1; i>=0; i--){
            if(i<8){
                finalCount += sortable[i];
            }
            else if(i>=8 && i<16){
                finalCount+= sortable[i] * 2;    
            }
            else if(i>=16 && i<24){
                finalCount+= sortable[i] * 3;  
            }
            else{
                finalCount += sortable[i] * 4;  
            }
            
        }
        return finalCount;
    } 
};

// console.log(minimumPushes("aabbcciiiiiiddeeffgghh"));