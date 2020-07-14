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
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) {
        return 0;
    }

    var n = prices.length;

    let hold = new Array(n);
    let unHold = new Array(n);

    hold[0] = -prices[0];
    unHold[0] = 0;

    for (let i = 1; i < n; i++) {
        if (i == 1) {
            hold[i] = Math.max(hold[i-1],-prices[i]);
        }else{
            hold[i] = Math.max(hold[i - 1], unHold[i - 2] - prices[i]);
        }
        unHold[i] = Math.max(unHold[i-1], hold[i-1] + prices[i]);
            
    }
    return unHold[n-1];
};

var Result0710 = maxProfit([1,2,3,0,2]);

console.log(Result0710);


/**
 * /**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    var counts = new Array();
    const sorted = [];
    for (let i = nums.length-1; i >=0; i--) {
        const index = findIndex(sorted,nums[i]);
        sorted.splice(index, 0, nums[i]);
        console.log(sorted);
       counts[i] = index;
    }
    return counts;
};

const findIndex = (arr, taget) =>{
    let l = 0;
    let hi = arr.length - 1;
    while (l < hi) {
        const mid = (l + hi) >>> 1;
        if (arr[mid] < taget) {
            l = mid +1;
        }else{
            hi = mid;
        }
        if (arr[l] < taget) {
            return l +1;
        }
        return l;
    }
}

var result = countSmaller([5,2,6,1])
console.log(result);


// const countSmaller = (nums) => {
//     const counts = new Array(nums.length).fill(0);
//     let indexedNums = new Array(nums.length); // indexedNums[i]包含元素的位置信息
//     for (let i = 0; i < indexedNums.length; i++) { // 让大家都能看懂 就没用JS的map
//       indexedNums[i] = { 
//         value: nums[i],
//         index: i
//       };
//     }
//     const mergeSort = (left, right) => {
//       if (right - left <= 1) return indexedNums.slice(left, right);// 不用sort了
//       const pivot = (left + right) >>> 1;
//     //   左边
//       const leftPart = mergeSort(left, pivot);
//     //   右边
//       const rightPart = mergeSort(pivot, right);
//       const merged = [];
//       let i = 0;
//       let j = 0;
//       while (i < leftPart.length) { // 遍历左边部分的元素
//         while (j < rightPart.length &&  rightPart[j].value <leftPart[i].value ) {
//           // 考察右边部分的元素，遇到小于当前左边元素的，推入merged数组
//           merged.push(rightPart[j]); 
//           j++; // 统计当前右边元素中，比当前左边元素小的元素个数
//         }
//         counts[leftPart[i].index] += j; // 在递归中累加j，统计出右边元素比它小的个数
//         merged.push(leftPart[i]); // 较小的进来后，自己也进去了
//         i++;                      // 考察下一个左边元素
//       }
//       // rightPart[j]比左边元素都大，while结束，将它和它后面的元素推入merged数组，继续递归
//       merged.push(...rightPart.slice(j));
//       return merged;
//     };
//     mergeSort(0, indexedNums.length);
//     return counts;
//   };
  

//MARK:2020.07.13
  /**
   * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    var n = nums1.length;
    var m = nums2.length;
    var left = 0 , right = 0;
    var arr = new Array();

    while (left < n && right < m) {
        if (nums1[left] > nums2[right]) {
            right++;
        }else if(nums1[left] < nums2[right]){
            left++;
        }else{
            arr.push(nums1[left]);
            left++;
            right++;
        }
    }
   return arr;
};
var result0713 = intersect([1,2,2,1]
    ,[2,2]);
    console.log(result0713);



    console.log("2020.7.14");
    /**
     * 2020.07.14
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    var n = triangle.length;
    var dp = new Array(n+1).fill(0);
    for (let index = n-1; index >= 0; index--) {
        var m = triangle[index].length
        for (let j = 0; j < m; j++) {
            dp[j] = Math.min(dp[j], dp[j+1])+ triangle[index][j]
        }
    }
    console.log(dp);
    return dp[0];
}
var result0714 = minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]);
console.log(result0714);
var result0714P = document.getElementById('result0714');

result0714P.innerHTML = '答案是:'+result0714
