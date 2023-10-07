/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low=1, high=Math.max(...piles);
    let result = high;
    
    while(low <= high){
        let mid = Math.floor((low+high) / 2);
        totalHour = 0;

        for(const pile of piles){
            totalHour += Math.ceil(pile / mid);
        }

        if(totalHour <= h){
            result = Math.min(result, mid);
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return result;
};