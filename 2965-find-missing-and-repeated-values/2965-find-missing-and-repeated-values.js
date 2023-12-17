/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    map = new Map();
bound = grid.length*grid.length
for(i=1; i<=bound; i++){
    map.set(i, 0);
}

for(i=0; i<grid.length; i++) {
    for(j=0; j<grid[i].length; j++) {
        if(map.has(grid[i][j])){
           map.set(grid[i][j], map.get(grid[i][j])+1);
        }
    }
}

result = [];

map.forEach((value, key) => {
    if (value === 0) {
      result[1]=key;
    }
    if (value === 2) {
        result[0]=key;
    }
  });
return result;
};