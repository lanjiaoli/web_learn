/**
 * 312. 戳气球
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。如果你戳破气球 i ，就可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。

求所能获得硬币的最大数量。

说明:

你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/burst-balloons
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var rec = [[]]
var val = []
var maxCoins = function(nums){
    var n = nums.length;
    
    val = new Array(n+1);
    for (let index = 1; index <= n; index++) {
        val[index] = nums[index-1];
    }
    val[0] = 1;
    val[n+1] = 1;
    rec = new Array(n+2).fill(0);
    for (let index = 0; index <  n + 1; index++) {
        rec[index] =  new Array(n+2).fill(0);
    }
    return solve(0 ,n+1);
};

var solve = function (left , right){
    if (left >= right-1) {
        return 0;
    }

    if (rec[left][right] != 0) {
        return rec[left][right];
    }

    for (let i = left + 1; i < right; i++) {
        var sum = val[left]*val[i]*val[right];
        sum += solve(left, i) +solve(i, right);
        rec[left][right] = Math.max(rec[left][right],sum);
    }
    return rec[left][right];
}

var coins  = maxCoins([3,1,5,8])
console.log("????")
console.log(coins)