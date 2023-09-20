/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        return a[1] - b[1]
    })

    let count = 0;
    let first_interval = intervals[0];

    for (i=1; i<intervals.length; i++){
        if(first_interval[1] > intervals[i][0]){
            count++;
        }
        else{
            first_interval = intervals[i];
        }
    }
    // console.log(count);
    return count;
};