/**
 * 2020.7.6
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 */

 /**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] == 1) {
        return 0;
    }
    var m = obstacleGrid.length 
    var n = obstacleGrid[0].length
    const dp = new Array(m);
    for (let index = 0; index < n; index++) {
        dp[index] = new Array(n)
    }
    dp[0][0]=1;
    for (let index = 1; index < m; index++) {
        dp[index][0] = obstacleGrid[index][0] == 1 || dp[index-1][0] == 0 ? 0:1;
    }

    for (let index = 1; index < n; index++) {
        dp[0][index] = obstacleGrid[0][index] == 1 || dp[0][index-1] == 0 ? 0:1;
    }

    for (let i = 1; i < m; i++) {
       for (let j = 1; j < n; j++) {
           dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i-1][j]+dp[i][j-1]
           
       }
        
    }
    return dp[m-1][n-1];
};

var result = uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]);
  console.log(result);

  function showCode(){
      console.log("显示代码")
      var value = document.getElementById("input").value;
      console.log(value)
        // console.log(nums);
      var result = uniquePathsWithObstacles(value);
      document.getElementById("code").innerHTML = "答案是：" + result;
      console.log()
  }


  /**
   * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
   */

//   Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    
    if (root == null) {
        return false;
    }
    if(root.left == null && root.right == null){
        return sum == root.val;
    }
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum - root.val)

};

function opetnOrginalUrl(url){
    window.open(url);
}


/**
 * 2020.07.08 
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，
 * 其中长度较短的木板长度为shorter，
 * 长度较长的木板长度为longer。
 * 你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if (k == 0) {
        return [];
    }
    if (shorter == longer) {
        return [k * shorter]
    }
    var s = k;
    var l = 0;
    var vals = new Array();    
    while (s >=  0) {
        var sum = shorter * s + l *longer;
        vals.push(sum);
        s--;
        l++
    }
    vals.sort((a,b) => a-b);
    return vals;
};
var result0708  = divingBoard(1,2,3);
console.log(result0708);
