/**
 * 64. 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length
    // 初始化DP
    var dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    dp[0][0]=grid[0][0];
    console.log(dp)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j != 0) {
                dp[i][j] = dp[i][j-1]+grid[i][j];
            }else if(i != 0 && j == 0){
                dp[i][j] = dp[i-1][j]+grid[i][j];
            }else if(i !=0 && j!=0){              
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1])+grid[i][j];
            }
        }
        
    }
    return dp[m-1][n-1];
};
var  result = minPathSum([
    [1,2],[5,6],[1,1]
  ]);
  console.log("2020.7.23");
  console.log(result);