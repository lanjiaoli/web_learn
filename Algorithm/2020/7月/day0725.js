/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {

    var n = nums.length;
    var dp = new Array(n+1);
    for (let index = 0; index <= n; index++) {
        
        dp[index] = new Array(m+1).fill(Number.MAX_VALUE);        

    }

    var sub = new Array(n+1);
    sub[0] = 0;
    for (let index = 0; index < n; index++) {
        sub[index+1] = sub[index] + nums[index]
    }
    dp[0][0]= 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i,m); j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j],Math.max(dp[k][j-1],sub[i]-sub[k]));
            }
            
        }
        
    }
    return dp[n][m];
};

console.log("============2020.07.25============");
var result  = splitArray([7,2,5,10,8],2);
console.log(result);
console.log("============2020.07.25完============");
