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

/**
 * 2020.07.09
 * 面试题 17.13. 恢复空格
 */
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    var len = sentence.length;
    // 如果为 0 直接返回0
    if(!len) return 0;
    // 创建一个Trie 字典树
    const trie = {};
    for (let i = 0; i < dictionary.length; i++) {
        // 拆分每个字符串
        const word = dictionary[i];
        let node = trie;
        // 对于字符串进行遍历
        for (let j = 0; m = word.length ,j < m; j++) {
            // 拆分字符串进行单个字符
            const char = word[j];
            node = node[char] || (node[char] = {});
        }
        node['$'] = true;
    }
    console.log('====================================');
    // console.log(node);
    console.log('====================================');
    const cache = new Array(len).fill(Infinity);
    let res = Infinity;
    const stack = [0];
    const countStack = [0];

    while(stack.length){
        const index = stack.pop();
        const  count = countStack.pop();

        const n = cache[index];

        console.log(`已匹配子串 ${sentence.slice(0, index)}, 未识别字符数为 ${count}`);

        if (count >= n || count >= res) {
            continue;
        }

        if(index >= len){
            console.log(`■■■■■ 匹配完成，未识别字符数为 ${count} ■■■■■`);
            if (count < res) res = count;
            continue;
        }

        let i = index;
        let node = trie[sentence[i++]];
        if (!(node && node['$'])) {
            stack.push(index+1);
            countStack.push(count+1);
        }
        while (node) {
            if (node['$']) {
                console.log(`识别到单词 ${sentence.slice(index, i)}`);
                stack.push(i);
                countStack.push(i);
            }
            node = node[sentence[i++]];

        }
        if(count < n){
            cache[index] = count;
        }
    }
    return res;
};


// 
var respace1 = function(dictionary, sentence) {
    var len = sentence.length;
    let dp = new Array(len).fill(0);
    for (let i = 1; i <= len; i++) {
        dp[i] = dp[i-1]+1;
        for (let j = 0; j < dictionary.length; j++) {
            //每个单词的长度
            let word = dictionary[j].length;
            // 如果当前单词与
            if (dictionary[j] == sentence.substring(i-word, i) && word <= i) {
                dp[i] = Math.min(dp[i], dp[i-word]);

            }
        }
    }
    return dp[len];
};

// var sentence = respace(["looked","just","like","her","brother"],"jesslookedjustliketimherbrother");
var sentence1 = respace1(["looked","just","like","her","brother"],"jesslookedjustliketimherbrother");

console.log('====================================');
// console.log("2020.07.09测试答案:" + sentence);
console.log('====================================');
console.log("2020.07.09测试答案:" + sentence1);



/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    if (obstacleGrid[0][0] == 1) {
        return 1;
    }
    let m = obstacleGrid.length 
    let n = obstacleGrid[0].length

    // 取最大值
    let min = Number.MAX_VALUE;

    let dp = new Array(n+1).fill(min);
    dp[n-1] = 1;
    for (let i = m- 1; i >= 0; i--) {
        for (let j =n-1 ; j >= 0; j--) {
            dp[j] = Math.max(1,Math.min(dp[j], dp[j+1]) - dungeon[i][j])
        }
         
     }
     return dp[0];
};
var calculateMinimumHP = function (dungeon) {
    let m = dungeon.length,
      n = dungeon[0].length,
      max = Number.MAX_VALUE;
    let dp = new Array(n + 1).fill(max);
    dp[n - 1] = 1;
    for (let i = m - 1; i >= 0; --i) {
      for (let j = n - 1; j >= 0; --j) {
        dp[j] = Math.max(1, Math.min(dp[j], dp[j + 1]) - dungeon[i][j]);
      }
    }
    return dp[0];
  };
