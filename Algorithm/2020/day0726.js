/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {

  // matrix长宽为0 返回结果值0
  // 遍历枚举起点
      // 变量行列查询到所以可能的起点

    let row = matrix.length;

    let colum = matrix[0] ? matrix[0].length : 0;
    let _result = 0;

    let dp = Array.from({length:row},()=>Array(colum).fill(0))

    if (row === 0 || colum === 0) {
        return _result;
    }
    console.log(dp)

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < colum; j++) {
            _result = Math.max(_result, dfs(i,j));

        }        
    }
   

    function dfs(r, c){

        if (dp[r][c]){
            return dp[r][c];
        }
        // 以其自身做节点
        dp[r][c] = 1;
        // 四个方向
        // 左侧
        if (c-1 >= 0 && matrix[r][c-1] > matrix[r][c]) {
            dp[r][c] = Math.max(dp[r][c], dfs(r, c-1)+1);

        }

      // 右侧
      if (c + 1 < colum && matrix[r][c + 1] > matrix[r][c])
        dp[r][c] = Math.max(dp[r][c], dfs(r, c + 1) + 1)

        // 上方
        if (r-1 >= 0 && matrix[r-1][c] > matrix[r][c]) {
            dp[r][c] = Math.max(dp[r][c], dfs(r-1, c)+1);
        }
        // 下方
        if (r+1 < row && matrix[r+1][c] > matrix[r][c]) {
            dp[r][c] = Math.max(dp[r][c] , dfs(r+1, c)+1);

        }

        return dp[r][c]
    }
    return _result;
}

/**
 * @param {number[][]} matrix
 * @return {number}
 */


var result = longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]);

console.log('====================================2020.7.26');
console.log(result);
console.log('================2020.7.26 over====================');