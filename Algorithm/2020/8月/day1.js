/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {

    let points = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            points.push([nums[i][j],i]);
        }
    }
    // 进行排列
    points.sort((a, b) => a[0] - b[0]);

    let counts = new Array(nums.length).fill(0);
    
    let countUnique = 0, minStart = -1, minLen = Number.MAX_SAFE_INTEGER,

    for (let i = 0, j = 0; j < points.length; j++) {
        if(counts[points[j][1]]++ === 0) countUnique++;
        while(countUnique === counts.length){
            if(points[j][0] - points[i][0] + 1 < minLen){
                minStart = points[i][0];
                minLen = points[j][0] - points[i][0] + 1;
            }
            let prev = points[i][0];
            while(i <= j && prev === points[i][0]){
                if(--counts[points[i++][1]] === 0) countUnique--;
            }
        }


        
    }
    return [minStart , minStart+minLen-1];
}

